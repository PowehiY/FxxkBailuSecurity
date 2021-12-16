import pyperclip
import time
import csv

if __name__ == '__main__':
    lastPasted = ""
    nowPasted = ""
    ans = []

    # 打开题库
    try:
        with open("./ans.csv", 'r', newline="", encoding="utf-8") as readfile:
            reader = csv.reader(readfile)
            for each in reader:
                ans.append(each)
    except FileNotFoundError:
        print("ans.csv Not found!")

    # 剪贴板更新时, 尝试查询答案并输出
    while True:
        nowPasted = pyperclip.paste()
        if lastPasted == "" or lastPasted != nowPasted:
            lastPasted = nowPasted
            print(lastPasted)
            for i in ans:
                if i[0] == lastPasted:
                    print(i[1])
        time.sleep(0.5)
