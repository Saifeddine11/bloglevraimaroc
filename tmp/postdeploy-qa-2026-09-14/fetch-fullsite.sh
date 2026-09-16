set -u
while IFS=$'\t' read -r id url; do
  out="tmp/postdeploy-qa-2026-09-14/live/fullsite/page-$id.html"
  [ -s "$out" ] && continue
  curl -L -sS --max-time 20 -o "$out" "$url" || true
  printf '%s\t%s\n' "$id" "$url" >> tmp/postdeploy-qa-2026-09-14/live/fullsite.log
 done < tmp/postdeploy-qa-2026-09-14/fullsite-map.tsv
