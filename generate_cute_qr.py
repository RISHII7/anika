# D:\Projects\Anika\apology\generate_cute_qr.py
import urllib.request
import urllib.parse
import os
import math
from PIL import Image, ImageDraw, ImageFont

def main():
    print("=== Generating Deployed Cute QR Code ===")
    url = "https://rishii7.github.io/anika/"
    encoded_url = urllib.parse.quote(url)
    
    # Download high-resolution QR with High Error Correction (ecc=H) 
    # and custom soft pink colors matching the website
    # QR Color: db2777 (rose/pink)
    # Background: fff0f3 (pastel pink-50)
    qr_api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=600x600&data={encoded_url}&ecc=H&color=db2777&bgcolor=fff0f3"
    
    local_qr_temp = "temp_qr_base.png"
    print("Downloading base QR code...")
    try:
        urllib.request.urlretrieve(qr_api_url, local_qr_temp)
    except Exception as e:
        print(f"Error fetching QR code: {e}")
        return

    # Open base QR image
    base_img = Image.open(local_qr_temp).convert("RGBA")
    w, h = base_img.size
    
    # Create canvas with extra height at the bottom for text
    canvas_w = w + 80
    canvas_h = h + 160
    final_img = Image.new("RGBA", (canvas_w, canvas_h), "#fff0f3")
    
    # Paste base QR in center-top
    paste_x = (canvas_w - w) // 2
    paste_y = 40
    final_img.paste(base_img, (paste_x, paste_y), base_img)
    
    draw = ImageDraw.Draw(final_img)
    
    # 1. Draw a white rounded card background in the center of the QR code
    # QR code center coordinates relative to canvas
    qr_cx = paste_x + w // 2
    qr_cy = paste_y + h // 2
    
    # Mask card size
    card_r = 65
    draw.rounded_rectangle(
        [qr_cx - card_r, qr_cy - card_r, qr_cx + card_r, qr_cy + card_r],
        radius=25,
        fill="#ffffff",
        outline="#fbcfe8",
        width=4
    )
    
    # 2. Draw a smooth mathematical heart in the center of the card
    heart_points = []
    size = 45 # Scale factor for heart
    for theta in range(0, 360):
        t = math.radians(theta)
        # Parametric heart equations
        x = 16 * (math.sin(t) ** 3)
        y = 13 * math.cos(t) - 5 * math.cos(2*t) - 2 * math.cos(3*t) - math.cos(4*t)
        
        # Center and map to screen coordinates (y-axis inverted)
        px = qr_cx + x * (size / 16)
        py = qr_cy - y * (size / 16)
        heart_points.append((px, py))
        
    # Draw heart with deep rose-pink fill
    draw.polygon(heart_points, fill="#db2777")
    
    # Add a cute little yellow sparkle inside the heart or a glow outline
    draw.polygon(heart_points, outline="#fff0f3", width=2)
    
    # 3. Add decorative floral corners or borders on the main canvas
    # Cute borders
    border_color = "#fbcfe8"
    draw.rectangle([15, 15, canvas_w - 15, canvas_h - 15], outline=border_color, width=4)
    draw.rectangle([22, 22, canvas_w - 22, canvas_h - 22], outline="#fff", width=2)
    
    # 4. Add romantic text at the bottom of the canvas
    text = "Scan to open Rishi's heart 💖"
    text_sub = "For my favorite girl, Anika 🌸"
    
    # Load Segoe Print/Segoe UI or default font
    font_path_main = "C:\\Windows\\Fonts\\segoepr.ttf" # Segoe Print (Handwritten look)
    font_path_sub = "C:\\Windows\\Fonts\\comic.ttf" # Comic Sans
    
    # Load fonts or fallbacks
    try:
        font_main = ImageFont.truetype(font_path_main, 28)
        font_sub = ImageFont.truetype(font_path_sub, 20)
    except IOError:
        # Fallback to default
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        
    # Draw Main Text
    try:
        # Calculate text width for centering
        text_bbox = draw.textbbox((0, 0), text, font=font_main)
        text_w = text_bbox[2] - text_bbox[0]
        tx = (canvas_w - text_w) // 2
        ty = canvas_h - 110
        draw.text((tx, ty), text, fill="#e11d48", font=font_main)
        
        # Draw Sub Text
        sub_bbox = draw.textbbox((0, 0), text_sub, font=font_sub)
        sub_w = sub_bbox[2] - sub_bbox[0]
        sx = (canvas_w - sub_w) // 2
        sy = canvas_h - 60
        draw.text((sx, sy), text_sub, fill="#be123c", font=font_sub)
    except Exception as e:
        # Simple draw fallback if textbbox fails
        draw.text((80, canvas_h - 100), text, fill="#e11d48")
        draw.text((120, canvas_h - 60), text_sub, fill="#be123c")
        
    # Save final stylized QR code
    output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cute_apology_qr.png")
    final_img.save(output_path, "PNG")
    print(f"Success! Cute QR code saved to: {output_path}")
    
    # Clean up temp file
    if os.path.exists(local_qr_temp):
        os.remove(local_qr_temp)

if __name__ == "__main__":
    main()
