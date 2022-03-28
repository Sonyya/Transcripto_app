import speech_recognition as sr
from pydub import AudioSegment
import wave
import contextlib
import os
#############################################################
def transcrire(name, lang):
    audio_file =sr.AudioFile(name)
    if lang == "fra":
        with audio_file as source:
            r.adjust_for_ambient_noise(source)
            audio = r.record(source)
        return r.recognize_google(audio, language = "fr-FR")

    elif lang == "ang":
        with audio_file as source:
            r.adjust_for_ambient_noise(source)
            audio = r.record(source)
        return r.recognize_google(audio)

##################################################################

audio = "11min.wav"
temp = "temp.wav"
text = "text4.txt"
lang = "fra"

print(f"Nous allons faire la transcription du fichier {audio} en francais")

with contextlib.closing(wave.open(audio,'r')) as f:
    frames = f.getnframes()
    rate = f.getframerate()
    duration = frames / float(rate)
    print(duration)

counter = 0

segment = AudioSegment.from_wav(audio)

r = sr.Recognizer()

with open(text, mode = "w") as file:
    file.write("Texte reconnu")
    file.write("\n")



while counter <= duration//180:

    print("###################")

    print(counter)

    if counter == duration // 180:

        print()
        print(counter)
        print("###################")

        portion = segment[counter * 180000:]

        portion.export(temp, format = "wav")

        result = transcrire(temp, lang)

        with open(text, mode = "a") as file:
            file.write(result)

        print("transcription finale terminee")

        os.remove(temp)
    
    else:

        print(f"\n{counter}")
        print("###################")

        portion = segment[180000*counter:180000*(counter + 1)]

        portion.export(temp, format = "wav")

        result = transcrire(temp, lang)

        with open(text, mode = "a") as file:
            file.write(result)

        print("2eme transcription terminee")

        os.remove(temp)
    
    counter += 1


os.startfile(rf"C:\Users\Ali\Documents\Python\Audio_test\{text}")







