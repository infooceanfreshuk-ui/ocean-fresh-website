import os
import shutil

src_dir = "/Users/shamalmohamedmk/Desktop/OCEAN FRESH/OceanFreshImages"
dest_dir = "/Users/shamalmohamedmk/Desktop/OCEAN FRESH/public/images/products"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

# Map UUIDs to meaningful names and product details
files_map = {
    "62947218-812b-40c0-b4a8-8c64e2ed9c58.png": {"id": "cobia", "name": "Cobia", "cat": "fish"},
    "39a206de-ac30-41a0-95d5-a30f4a6c9d64.png": {"id": "cod-fillet", "name": "Cod Fillet", "cat": "fish"},
    "c9cb0da2-8ca8-4e1f-9290-3c8c66346146.png": {"id": "emperor-fish", "name": "Emperor Fish", "cat": "fish"},
    "c9134eaf-b245-41e2-a033-41d3ac908bb6.png": {"id": "english-mackerel", "name": "English Mackerel", "cat": "fish"},
    "149fa3d4-6014-4c4f-be32-b96573c59e22.png": {"id": "golden-pomfret", "name": "Golden Pomfret", "cat": "fish"},
    "710aaabc-6ff8-4bbf-a3ba-042425db6a4a.png": {"id": "grey-mullet", "name": "Grey Mullet", "cat": "fish"},
    "60a748a4-4483-4864-91f5-b148bf53bb83.png": {"id": "grouper", "name": "Grouper", "cat": "fish"},
    "b8300454-1112-477c-b74b-563e66719148.png": {"id": "hake-fish", "name": "Hake Fish", "cat": "fish"},
    "d94eca97-7cf9-4a01-a6df-175ca978b06e.png": {"id": "indian-mackerel-1", "name": "Indian Mackerel", "cat": "fish"},
    "b1731377-85ee-44f3-be55-dc06246764e6.png": {"id": "indian-sardines", "name": "Indian Sardines", "cat": "fish"},
    "9f8bcdbe-1769-48d8-b5aa-a7f65469c824.png": {"id": "indian-pomfret", "name": "Indian Pomfret", "cat": "fish"},
    "898bf756-8e80-4a66-addc-aea4908fce1e.png": {"id": "black-pomfret", "name": "Black Pomfret", "cat": "fish"},
    "9347cb6c-5f53-4cd0-9645-405118f85605.png": {"id": "indian-threadfin-bombay-duck", "name": "Indian Threadfin (Bombay Duck)", "cat": "fish"},
    "19d2811f-d1d9-40d1-b961-f6779c769433.png": {"id": "indian-salmon", "name": "Indian Salmon", "cat": "fish"},
    "67f14869-dd87-497e-98a5-a29b554a36cb.png": {"id": "indian-mackerel-2", "name": "Indian Mackerel", "cat": "fish"},
    "fa4d2d60-3e3c-4415-9c55-9a7b5f626339.png": {"id": "indian-seer-fish", "name": "Indian Seer Fish (Surmai)", "cat": "fish"},
    "610de967-bacf-459b-9eaf-016084969fdb.png": {"id": "indian-koi", "name": "Indian Koi (Nethili)", "cat": "fish"},
    "a9755fec-aa83-42d3-9a10-2d55c44b4ae7.png": {"id": "indian-silver-pomfret", "name": "Indian Silver Pomfret (Paplet)", "cat": "fish"},
    "467c7730-6e20-4ae9-ace6-996786784dcb.png": {"id": "indian-anchovy", "name": "Indian Anchovy (Netholi)", "cat": "fish"},
    "c8eec713-41d6-4472-95be-12b1edd4108b.png": {"id": "indian-horse-mackerel", "name": "Indian Horse Mackerel (Ayala)", "cat": "fish"},
    "fbe9be26-5b3c-4f36-83e0-4e7640d847db.png": {"id": "indian-threadfin-vanjiram", "name": "Indian Threadfin (Vanjiram)", "cat": "fish"},
    "b15add18-2260-4512-8bdc-f198bb3e1659.png": {"id": "indian-mackerel-seer-fish", "name": "Indian Mackerel (Seer Fish)", "cat": "fish"},
    "126575a0-d17e-4487-a384-7d0ade53ffa0.png": {"id": "sail-fish", "name": "Sail Fish (Sword Fish)", "cat": "fish"},
    "933bbcc6-96bd-4887-b438-71c077eb188c.png": {"id": "indian-shark", "name": "Indian Shark (Dog Fish)", "cat": "fish"},
    "e7e0efeb-fcc7-4810-9cd5-a554dda302fe.png": {"id": "indian-pomfret-silver", "name": "Indian Pomfret (Silver Pomfret)", "cat": "fish"},
    "fda9291a-4a5c-4f4d-8159-aab9c0690785.png": {"id": "scallops", "name": "Scallops", "cat": "shellfish"},
    "54f6a9fd-c558-438b-ba65-e4f880510f95.png": {"id": "squid-calamari", "name": "Squid / Calamari", "cat": "squid"},
    "3496c6d6-1666-4745-bcca-2df43022c6f6.png": {"id": "octopus", "name": "Octopus", "cat": "specialty"},
    "dec9df0d-dc9e-4185-ab2a-291a750f1b5a.png": {"id": "lobster", "name": "Lobster", "cat": "lobster"},
    "7860231f-e53f-467d-b5bc-40ad715dff9d.png": {"id": "tilapia", "name": "Tilapia", "cat": "fish"},
    "64754cc8-4e45-4b02-b736-09567eceef59.png": {"id": "trout", "name": "Trout", "cat": "fish"},
    "3c978ae1-8bac-4b09-bf65-cc2cd8425f95.png": {"id": "prawns-shrimp", "name": "Prawns / Shrimp", "cat": "prawns"},
    "77160b31-74bd-4ace-84cf-14ed051e4fef.png": {"id": "sardines", "name": "Sardines", "cat": "fish"}
}

new_products = []

for filename, data in files_map.items():
    src_file = os.path.join(src_dir, filename)
    dest_filename = f"{data['id']}.png"
    dest_file = os.path.join(dest_dir, dest_filename)
    
    if os.path.exists(src_file):
        shutil.copy2(src_file, dest_file)
        new_products.append(f'    {{ id: "{data["id"]}", name: "{data["name"]}", image: "/images/products/{dest_filename}", category: "{data["cat"]}" }},')
    else:
        print(f"Warning: {filename} not found!")

# Print out the JS array items to paste into siteConfig.ts
print("\n".join(new_products))
