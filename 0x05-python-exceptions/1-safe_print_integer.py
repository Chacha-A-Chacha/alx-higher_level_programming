#!/usr/bin/python3
def safe_print_integer(value):
    '''print na integeruse try /except'''

    try:
        print("{:d}".format(value))
        return True
    except:
        return False
