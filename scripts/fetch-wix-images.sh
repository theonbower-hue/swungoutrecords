#!/usr/bin/env bash
# Downloads the original images from the old Wix site into assets/img/.
# Run once (locally, or via the "Fetch Wix images" GitHub Action) before Wix is cancelled.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/img
grep -v '^#' scripts/wix-images.txt | while read -r name id; do
  [ -z "$name" ] && continue
  [ -s "assets/img/$name" ] && continue
  curl -fsSL "https://static.wixstatic.com/media/$id" -o "assets/img/$name" && echo "ok $name"
done
