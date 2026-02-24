import urllib.request
from bs4 import BeautifulSoup
import re
import os
import subprocess

# 1. Kyobo Books URLs
book_urls = [
    "https://product.kyobobook.co.kr/detail/S000218960507",
    "https://product.kyobobook.co.kr/detail/S000001919113",
    "https://product.kyobobook.co.kr/detail/S000001919065"
]

print("=== BOOKS from kyobobook.co.kr ===")
for url in book_urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(html, 'html.parser')
        title = soup.title.string if soup.title else "No Title Found"
        # Kyobo's title format: "Book Title - 저자 - Publisher - 교보문고"
        print(f"URL: {url}")
        print(f"Title: {title.strip()}")
    except Exception as e:
        print(f"Error fetching {url}: {e}")

# 2. Journals (PDFs)
journal_dir = "/Users/callii/Documents/my-life/journal"
print("\n=== JOURNALS in /journal ===")
for root, dirs, files in os.walk(journal_dir):
    for f in files:
        if f.endswith('.pdf'):
            filepath = os.path.join(root, f)
            print(f"File: {f}")
            # using mdls to extract macOS metadata if it's there
            try:
                res = subprocess.check_output(['mdls', '-name', 'kMDItemTitle', '-name', 'kMDItemAuthors', filepath]).decode('utf-8')
                print(res.strip())
            except Exception as e:
                print(e)
