#!/bin/bash

# Create a 'webm' subdirectory if it doesn't exist
mkdir -p webm

# Convert all MP4 files to WebM using FFmpeg

        output="webm/she-a-rock.webm"
        echo "Converting video to $output"
        
        # Use a single line command (no line continuations)
        ffmpeg -i she-a-rock-mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -row-mt 1 -tile-columns 2 -c:a libopus -b:a 64k "$output"
        
        echo "Conversion complete: $output"



echo "All conversions finished! WebM files saved in ./webm/"
