set -u
BASE='tmp/postdeploy-qa-2026-09-14/live'
mkdir -p "$BASE/pages" "$BASE/images" "$BASE/headers"
i=0
while IFS= read -r url; do
  i=$((i+1))
  name=$(printf '%03d' "$i")
  curl -L -sS --max-time 30 -D "$BASE/headers/page-$name.headers" -o "$BASE/pages/page-$name.html" -w '%{http_code} %{url_effective} %{content_type}\n' "$url" >> "$BASE/pages.log" || echo "000 $url ERROR" >> "$BASE/pages.log"
  printf '%s\t%s\n' "$name" "$url" >> "$BASE/page-map.tsv"
done < tmp/postdeploy-qa-2026-09-14/page-urls.txt
i=0
while IFS= read -r url; do
  i=$((i+1))
  name=$(printf '%03d' "$i")
  curl -L -sS --max-time 30 -D "$BASE/headers/image-$name.headers" -o "$BASE/images/image-$name.webp" -w '%{http_code} %{url_effective} %{content_type}\n' "$url" >> "$BASE/images.log" || echo "000 $url ERROR" >> "$BASE/images.log"
  printf '%s\t%s\n' "$name" "$url" >> "$BASE/image-map.tsv"
done < tmp/postdeploy-qa-2026-09-14/image-urls.txt
