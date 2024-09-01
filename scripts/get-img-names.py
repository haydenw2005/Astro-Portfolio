import os
import json
import argparse

def get_image_names(directory):
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')
    return [f for f in os.listdir(directory) if f.lower().endswith(image_extensions)]

def main():
    parser = argparse.ArgumentParser(description='Get image names from a directory and save to JSON.')
    parser.add_argument('directory', help='Directory to scan for images')
    parser.add_argument('output', help='Output JSON file path')
    args = parser.parse_args()

    image_names = get_image_names(args.directory)
    
    with open(args.output, 'w') as f:
        json.dump(image_names, f, indent=2)

    print(f"Image names saved to {args.output}")

if __name__ == '__main__':
    main()