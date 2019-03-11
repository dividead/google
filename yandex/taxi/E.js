// Такси в отеле

// Ограничение времени	1 секунда
// Ограничение памяти	512Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt
// При отеле в курортном городе работает такси. Оно забирает посетителей отеля с аэропорта, а в день отъезда отвозит назад. Нам известны дни приездов и отъездов автомобилей этого такси и число клиентов отеля, которые каждый раз приезжали или уезжали. В один и тот же день может быть как несколько приездов, так и несколько отъездов посетителей.
// В отеле по нечётным числам месяца готовит шеф-повар Мефодий, по чётным — шеф-повар Кирилл. Они поспорили, кому тяжелее работать. Повара хотят посчитать максимальное число посетителей в день, для которого готовил каждый из них — в период времени от первого дня до текущего включительно.
// Напишите программу, которая, используя данные про приезды и отъезды посетителей, выводит на стандартный вывод два числа через пробел. Первое число — максимальное количество посетителей, для которых готовил Мефодий. Второе — максимальное количество посетителей, для которых готовил Кирилл.
// Условие: для приезжающих постояльцев в день приезда готовить нужно, а для отъезжающих в этот день — уже не нужно (то есть нужно готовить только для тех, кто остается в отеле как минимум на ночь). Изначально в отеле посетителей не было.
// Формат ввода

// На входе на первой строке есть одно число N (2 ≤ N ≤ 105), где (N - 1) число записей в логе.
// Далее следует строка с информацией про номер текущего дня M — целое положительное число (0 ≤ M ≤ 103). После идёт (N - 1) строка с данными о приездах и отъездах такси с посетителями до текущего дня в виде набора строк в следующем формате:
// arrival arrival_day_number clients_count
// departure departure_day_number clients_count
// Строки, начинающиеся со слова arrival, соответствуют приезду clients_count клиентов в день под номером arrival_day_number. Строки, начинающиеся со слова departure, соответствуют отъезду clients_count клиентов в день под номером departure_day_number.
// При этом выполняются условия:
// 0 < clients_count ≤ 103
// 0 ≤ arrival_day_number ≤ 105
// 0 ≤ departure_day_number ≤ 105
// Формат вывода

// Два числа — максимальные количества посетителей, для которых готовил Мефодий и Кирилл, соответственно.
// Пример

// Ввод	Вывод
// 7
// 3
// arrival 3 2
// departure 2 5
// arrival 3 2
// arrival 2 2
// arrival 1 10
// departure 3 7
// 10 7