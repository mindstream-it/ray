"""
Currently used Bazel version. This version is what the rules here are tested against.
This version should be updated together with the version of Bazel in .bazelversion.
"""
BAZEL_VERSION = "7.0.0"

# NOTE: Keep in sync with .bazelci/presubmit.yml
# This is the minimum supported bazel version, that we have some tests for.
MINIMUM_BAZEL_VERSION = "6.4.0"

# Versions of Bazel which users should be able to use.
# Ensures we don't break backwards-compatibility,
# accidentally forcing users to update their LTS-supported bazel.
# These are the versions used when testing nested workspaces with
# rules_bazel_integration_test.
#
# Keep in sync with MODULE.bazel's bazel_binaries config
SUPPORTED_BAZEL_VERSIONS = [
    BAZEL_VERSION,
    MINIMUM_BAZEL_VERSION,
]
