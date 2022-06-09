#!/usr/bin/python3
"""
#!/usr/bin/python3
for i in range(0, 100):
    if i == 0 or (i/10 >= i % 10):
        continue
    elif (i < 89):
        print(f"{i:02}, ", end="")
    else:
        print(f"{i:02}")

"""
for i in range(0, 9):
    for j in range(i+1, 10):
        if i == 8 and j == 9:
            print("{}{} ".format(i, j), end="")
            break
        print("{}{}, ".format(i, j), end="")
