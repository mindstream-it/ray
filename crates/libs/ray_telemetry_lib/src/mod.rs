#[cfg_attr(target_os = "android", path = "os/android.rs")]
#[cfg_attr(target_os = "ios", path = "os/ios.rs")]
#[cfg_attr(target_os = "linux", path = "os/linux.rs")]
#[cfg_attr(target_os = "macos", path = "os/macos.rs")]
#[cfg_attr(target_os = "windows", path = "os/windows.rs")]
#[cfg_attr(target_os = "none", path = "none.rs")]
pub mod telemetry;
use crate::telemetry::*;

pub fn run() {
  hello();
}
