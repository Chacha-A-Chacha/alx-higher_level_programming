#!usr/bin/python3
def safe_print_division(a, b):
    '''try, except and finnaly for ZeroDivisionError'''

    try:
        division = a / b

    except ZeroDivisionError:
        division = None
    
    finally:
        print("Inside resuslt: {}".format(division))
        return division
