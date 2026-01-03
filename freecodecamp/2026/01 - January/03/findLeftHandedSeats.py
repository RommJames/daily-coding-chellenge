def find_left_handed_seats(table):
    count = 0;

    for row_index, row in enumerate(table):
        for col_index, seat in enumerate(row):
            if seat != "U":
               continue 

            if row_index == 0:
                left_index = col_index + 1
            else:
                left_index = col_index - 1
            
            if 0 <= left_index < len(row):
              if row[left_index] != "R":
                count += 1
            else:
               count += 1
               

    return count

print(
  find_left_handed_seats([
    ["U", "R", "U", "L"],
    ["U", "R", "R", "R"],
  ])
);

print(
  find_left_handed_seats([
    ["U", "U", "U", "U"],
    ["U", "U", "U", "U"],
  ])
);

print(
  find_left_handed_seats([
    ["U", "R", "U", "R"],
    ["L", "R", "R", "U"],
  ])
);