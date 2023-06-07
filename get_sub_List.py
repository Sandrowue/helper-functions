def get_sub_List(list, subSize):
    result = []
    for i in range(len(list)):
        sub = list[i:i + subSize]
        result.append(sub)
    return result

print(get_sub_List(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 1))