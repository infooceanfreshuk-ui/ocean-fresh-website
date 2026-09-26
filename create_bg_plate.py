import cv2
import numpy as np
from rembg import remove
from PIL import Image
import io
import os

source_img_path = "/Users/shamalmohamedmk/Desktop/OCEAN FRESH/public/images/products/indian-koi.png"
if not os.path.exists(source_img_path):
    print("Source image not found.")
    exit(1)

with open(source_img_path, "rb") as f:
    input_data = f.read()

print("Extracting foreground to get mask...")
output_data = remove(input_data)
fg_img = Image.open(io.BytesIO(output_data)).convert("RGBA")

# Extract alpha channel as mask
mask = np.array(fg_img)[:,:,3]

# Dilate the mask a bit to ensure we cover all edges
kernel = np.ones((15,15), np.uint8)
mask_dilated = cv2.dilate(mask, kernel, iterations=1)

# Read original image in cv2
orig_img = cv2.imread(source_img_path)

print("Inpainting background to remove the fish...")
# Inpaint to fill the hole left by the fish
bg_inpainted = cv2.inpaint(orig_img, mask_dilated, 3, cv2.INPAINT_TELEA)

# Save the background plate
cv2.imwrite("/Users/shamalmohamedmk/Desktop/OCEAN FRESH/public/images/products/bg_plate.jpg", bg_inpainted)
print("Background plate created successfully.")
