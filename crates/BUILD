load(
    "@rules_rust//rust:defs.bzl",
    "rust_binary",
    "rust_library",
)

rust_binary(
    name = "ray_cli_app",
    srcs = glob(["apps/ray_cli_app/src/**/*.rs"]),
    crate_root = "apps/ray_cli_app/src/main.rs",
    crate_features = [],
    edition = "2021",
    proc_macro_deps = [],
    visibility = ["//visibility:public"],
    deps = [
        ":ray_core_lib",
        ":ray_telemetry_lib",
    ],
)

rust_binary(
    name = "ray_telemetry_api",
    srcs = glob(["apps/ray_telemetry_api/src/**/*.rs"]),
    crate_root = "apps/ray_telemetry_api/src/main.rs",
    crate_features = [],
    edition = "2021",
    proc_macro_deps = [],
    visibility = ["//visibility:public"],
    deps = [":ray_telemetry_lib"],
)

rust_library(
    name = "ray_telemetry_lib",
    srcs = glob(["libs/ray_telemetry_lib/src/**/*.rs"]),
    crate_root = "libs/ray_telemetry_lib/src/mod.rs",
    crate_features = [],
    edition = "2021",
    proc_macro_deps = [],
    visibility = ["//visibility:public"],
    deps = [":ray_core_lib"],
)

rust_library(
    name = "ray_core_lib",
    srcs = glob(["libs/ray_core_lib/src/**/*.rs"]),
    crate_root = "libs/ray_core_lib/src/lib.rs",
    crate_features = [],
    edition = "2021",
    proc_macro_deps = [],
    visibility = ["//visibility:public"],
)
