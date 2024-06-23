import random

pemain = int(input("Masukkan angka 1 - 10: "))

komputer = math.random.randint(1, 10)

if pemain == komputer:
    print("Selamat! Anda menang!")
else:
    print("Anda kalah! Komputer memilih angka", komputer)

    