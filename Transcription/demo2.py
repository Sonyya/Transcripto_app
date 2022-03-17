import speech_recognition as sr
import os

r = sr.Recognizer()

print("En quelle langue allez-vous faire la transcription?")
print("1: Francais")
print("2: Anglais")
ans = int(input("SVP entrez 1 ou 2: "))

name = input("Entrez le nom du fichier sans l'extension: ")

test = name + ".wav"

text = name + ".txt"



audio_file = sr.AudioFile(test)

if ans == 1:
    with audio_file as source:
        r.adjust_for_ambient_noise(source)
        audio = r.record(source)
    result = r.recognize_google(audio, language = "fr-FR")

else:
    with audio_file as source:
        r.adjust_for_ambient_noise(source)
        audio = r.record(source)
    result = r.recognize_google(audio)
    
with open("text2.txt", mode = "x") as file:
    file.write("Texte reconnu")
    file.write("\n")
    file.write(result)
    print("La transcription est terminee")


os.startfile(r"C:\Users\Ali\Documents\Python\Transcription\text2.txt")



