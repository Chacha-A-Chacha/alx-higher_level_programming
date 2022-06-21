#!/usr/bin/python3
'''
define a class square 

'''

class Square():
    '''A class to represent a square.'''
    def __init__(self, size=0):
        '''
        all the attributes for the square object
        
        '''
        #validate size
        if type(size) is not int:
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__self = size
