import os
import cv2
from rembg import remove
from PIL import Image, ImageFilter
import io

cache_dir = "/Users/shamalmohamedmk/.gemini/antigravity-ide/brain/321e5c1f-e2db-4832-9497-7f51274c8487"
output_dir = "/Users/shamalmohamedmk/Desktop/OCEAN FRESH/public/images/products"
bg_plate_path = "/tmp/dark_ice.jpg"

# Open the new background plate and resize it
bg_plate = Image.open(bg_plate_path).convert("RGBA").resize((1024, 1024))
# Darken the background a bit to ensure fish pops out
bg_plate = bg_plate.point(lambda p: p * 0.5)

images = [
    "blue_swimming_crab_1788239224636.jpg",
    "caviar_1788239235446.jpg",
    "emperor_fish_1788239248283.jpg",
    "indian_sardines_1788239260563.jpg",
    "silver_pomfret_1788239277462.jpg",
    "black_pomfret_1788239290052.jpg",
    "threadfin_bream_1788239302639.jpg",
    "indian_salmon_1788239321241.jpg",
    "indian_mackerel_1788239339454.jpg",
    "kingfish_1788239352860.jpg"
]

for img_name in images:
    cached_path = os.path.join(cache_dir, img_name)
    if not os.path.exists(cached_path):
        print(f"Skipping {img_name}")
        continue
    
    print(f"Processing {img_name}...")
    try:
        with open(cached_path, "rb") as i:
            input_data = i.read()
        
        # Remove background (returns RGBA)
        output_data = remove(input_data)
        fg_img = Image.open(io.BytesIO(output_data)).convert("RGBA")
        
        # Scale fish up slightly if needed
        # Composite
        composite = bg_plate.copy()
        
        # Add a subtle drop shadow to the fish
        shadow = fg_img.copy().convert("RGBA")
        shadow_data = []
        for item in shadow.getdata():
            if item[3] > 0:
                shadow_data.append((0, 0, 0, 150))
            else:
                shadow_data.append((0, 0, 0, 0))
        shadow.putdata(shadow_data)
        shadow = shadow.filter(ImageFilter.GaussianBlur(15))
        
        # Paste shadow slightly offset
        composite.paste(shadow, (0, 20), shadow)
        # Paste fish
        composite.paste(fg_img, (0, 0), fg_img)
        
        # Save
        base_name, _ = os.path.splitext(img_name)
        new_name = f"{base_name}_iced.jpg"
        new_path = os.path.join(output_dir, new_name)
        
        final_img = composite.convert("RGB")
        final_img.save(new_path, "JPEG", quality=95)
        print(f"Saved {new_name}")
    except Exception as e:
        print(f"Error {img_name}: {e}")
