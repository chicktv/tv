import os
import requests
import json

# 直接讀取同資料夾下的 urls.txt
def download_all():
    if not os.path.exists('urls.txt'):
        print("找不到 urls.txt")
        return

    with open('urls.txt', 'r', encoding='utf-8') as f:
        # 在前後加上 {} 讓它變成標準 JSON 格式
        raw_content = f.read().strip().rstrip(',')
        data = json.loads("{" + raw_content + "}")

    for name, url in data.items():
        # 提取 ID 並建立路徑
        uuid = url.split('/')[-2]
        target_dir = f"badges/v1/{uuid}"
        os.makedirs(target_dir, exist_ok=True)
        
        # 下載
        r = requests.get(url)
        with open(f"{target_dir}/1", 'wb') as f:
            f.write(r.content)
        print(f"已下載: {uuid}")

if __name__ == "__main__":
    download_all()