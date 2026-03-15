import os

def merge_files_to_txt(input_folder, output_file):
    # Открываем итоговый файл для записи (используем utf-8)
    with open(output_file, 'w', encoding='utf-8') as outfile:
        
        # Проходим по всем элементам в указанной папке
        for filename in os.listdir(input_folder):
            file_path = os.path.join(input_folder, filename)
            
            # Убеждаемся, что это файл, а не подпапка
            if os.path.isfile(file_path):
                try:
                    # Пытаемся прочитать файл
                    # errors='replace' заменит нечитаемые символы, чтобы скрипт не упал на бинарниках
                    with open(file_path, 'r', encoding='utf-8', errors='replace') as infile:
                        content = infile.read()
                        
                    # Записываем разделитель с именем файла
                    outfile.write(f"========== ФАЙЛ: {filename} ==========\n")
                    outfile.write(content)
                    # Добавляем пустые строки для визуального разделения
                    outfile.write("\n\n")
                    
                except Exception as e:
                    print(f"Не удалось прочитать {filename}: {e}")

# --- Настройки ---
# Путь к папке, где лежат ваши файлы (можно указать абсолютный или относительный путь)
INPUT_FOLDER = '.' 

# Имя итогового файла, куда всё запишется
OUTPUT_FILE = 'all_files_combined.txt'

# Запуск функции
if __name__ == "__main__":
    # Создаем папку, если она вдруг не существует (чтобы скрипт не выдал ошибку, если вы сразу его запустите)
    if not os.path.exists(INPUT_FOLDER):
        print(f"Папка {INPUT_FOLDER} не найдена. Пожалуйста, укажите правильный путь.")
    else:
        merge_files_to_txt(INPUT_FOLDER, OUTPUT_FILE)
        print(f"Готово! Содержимое всех файлов собрано в: {OUTPUT_FILE}")