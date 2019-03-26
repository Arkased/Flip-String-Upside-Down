# Flip-String-Upside-Down
A fun little Python script which flips a string (English) upside down.

Input: https://docs.google.com/document/d/1wLYuP8eRK0Dj6v-wp4CVCCuSJlYNVCzXoTouOC5Xw4s
Output: https://docs.google.com/document/d/1lncDzbFkwAld2M7V5TlKb-HVQBO7I19MpnSHM3XnUJQ

This "program" consists of two scripts to mess up any text document: a Python script which flips a text string (English) upside down,
and a Google Apps Script which mutates the font size and font color of a Google Document. The two parts can be used sepeartely or together,
but I haven't directly integrated them with each other; you will need to do some copy+pasting.

Instructions For Use:
1. Take a text document and (after making a backup) save it as a .txt file and name it "input.txt". Alternatively, you can run the Python
   script interactively and load the file with whatever name it is, but it must be a .txt file or weird things will probably happen.
2. With your "input.txt" file in the same folder as the Python script, run the Python script. It should produce another file called
   "output.txt" in the same folder. The script won't work if such a file already exists (unless you run the script interactively and
   specify a different file name).
3. Copy+paste the contents of "output.txt" into your word processor of choice. If you wish to mutate the font color and font size, you
   will need to use Google Documents here.
4. Assuming you're using Google Docs, open Google Apps Script (this can be done from Google Drive -> New -> More -> Google Apps Script)
   and copy+paste the code from "color_and_size_adjuster.gs" in. You will need to replace the 'id' variable with the ID of your Google
   Doc file (instructions on how to find the ID can be found in the comments of the code)
5. Run the script (after giving it permissions).
6. Make any adjustments to match the original style (bolding, underlining, sub and superscript etc.) and export your file. You'll have
   to do this manually, sorry.

And that should do it. If you don't want to bother with the upside down stuff (say if your file uses characters outside the English
alphabet and basic English punctuation), you can skip the first two steps and just mutate the color and font size.
