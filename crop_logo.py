from PIL import Image

def crop_transparent(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            # bbox is (left, upper, right, lower)
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path, "PNG")
            print(f"Successfully cropped logo from {img.size} to {cropped_img.size}")
        else:
            print("Image is completely transparent or bbox not found.")
    except Exception as e:
        print(f"Error: {e}")

crop_transparent("public/images/logo-transparent.png", "public/images/logo-transparent.png")
