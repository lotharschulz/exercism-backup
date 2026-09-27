use anyhow::{Context, Error};

/// While using `&[&str]` to handle flags is convenient for exercise purposes,
/// and resembles the output of [`std::env::args`], in real-world projects it is
/// both more convenient and more idiomatic to contain runtime configuration in
/// a dedicated struct. Therefore, we suggest that you do so in this exercise.
///
/// [`std::env::args`]: https://doc.rust-lang.org/std/env/fn.args.html
#[derive(Debug)]
pub struct Flags {
    print_line_numbers: bool,
    print_file_names_only: bool,
    case_insensitive: bool,
    invert: bool,
    match_entire_line: bool,
}

impl Flags {
    pub fn new(flags: &[&str]) -> Self {
        let has = |flag: &str| flags.contains(&flag);
        Self {
            print_line_numbers: has("-n"),
            print_file_names_only: has("-l"),
            case_insensitive: has("-i"),
            invert: has("-v"),
            match_entire_line: has("-x"),
        }
    }

    fn matches(&self, line: &str, pattern: &str) -> bool {
        let (line, pattern) = if self.case_insensitive {
            (line.to_lowercase(), pattern.to_lowercase())
        } else {
            (line.to_owned(), pattern.to_owned())
        };
        let found = if self.match_entire_line {
            line == pattern
        } else {
            line.contains(&pattern)
        };
        found != self.invert
    }
}

pub fn grep(pattern: &str, flags: &Flags, files: &[&str]) -> Result<Vec<String>, Error> {
    let prefix_file_name = files.len() > 1;
    let mut results = Vec::new();

    for &file_name in files {
        let content = std::fs::read_to_string(file_name)
            .with_context(|| format!("failed to read file '{file_name}'"))?;
        let mut matching_lines = content
            .lines()
            .enumerate()
            .filter(|(_, line)| flags.matches(line, pattern));

        if flags.print_file_names_only {
            if matching_lines.next().is_some() {
                results.push(file_name.to_owned());
            }
            continue;
        }

        for (index, line) in matching_lines {
            let mut output = String::new();
            if prefix_file_name {
                output.push_str(file_name);
                output.push(':');
            }
            if flags.print_line_numbers {
                output.push_str(&format!("{}:", index + 1));
            }
            output.push_str(line);
            results.push(output);
        }
    }

    Ok(results)
}
