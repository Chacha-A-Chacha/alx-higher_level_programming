#!/usr/bin/python3

if __name__ == "__main__":

    import sys
    argv = sys.argv
    argc = len(argv)
    if argc == 1:
        arg = "arguments."
    else:
        arg = "argument"
        arg += "s:" if argc > 2 else ":"

    print(f"{argc - 1} {arg}")

    for i in range(1, argc):
        print(f"{i}: argv[i]")
