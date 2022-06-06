#!/usr/bin/python3
def no_c(my_string):
    str_list = list(my_string)
    length = len(str_list)
    for i in range(0, length):
        if str_list[i] == 'c' or str_list[i] == 'C':
            str_list[i] = ''
    new_str = ''.join([char for char in str_list])
    return new_str
