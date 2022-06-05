#!/usr/bin/pyhton3

if __name__ == "__main__":
    import hidden_4
    lists = dir(hidden_4)
    for list in lists:
        if list[:2] != '_':
            print(list)
