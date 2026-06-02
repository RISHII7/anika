# D:\Projects\Anika\apology\generate_qr.py
import urllib.request
import urllib.parse
import os

def main():
    print("=== QR Code Generator for Anika's Apology Website ===")
    print("To make the website accessible via QR code, you must first host it online.")
    print("Recommended free hosting options (takes 2 minutes):")
    print("1. Netlify (Drag & Drop the 'dist' folder onto app.netlify.com)")
    print("2. Vercel (vercel.com)")
    print("3. GitHub Pages")
    print("-" * 50)
    
    url = input("Enter your hosted website URL (e.g., https://anika-apology.netlify.app): ").strip()
    if not url:
        # Fallback placeholder
        url = "https://anika-sharma.lovable.app"
        print(f"No URL entered. Using default placeholder: {url}")
        
    print(f"Generating QR code for: {url}")
    
    # URL encode the data
    encoded_url = urllib.parse.quote(url)
    qr_api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=400x400&data={encoded_url}"
    
    output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "apology_qr.png")
    
    try:
        print("Downloading QR code image...")
        urllib.request.urlretrieve(qr_api_url, output_path)
        print(f"Success! QR code image saved to: {output_path}")
        print("You can print this image or send it to her so she can scan it and open the website.")
    except Exception as e:
        print(f"Error downloading QR code: {e}")

if __name__ == "__main__":
    main()
