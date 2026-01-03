function findLeftHandedSeats(table) {
  let leftHanded = 0;
  let row = 1;

  const topUindexes = table[0].reduce((acc, val, index) => {
    if (val === "U") acc.push(index);
    return acc;
  }, []);

  const botUindexes = table[1].reduce((acc, val, index) => {
    if (val === "U") acc.push(index);
    return acc;
  }, []);

  table.forEach((seats) => {
    if (row === 1) {
      for (let top of topUindexes) {
        if (seats[top + 1] !== "R") {
          leftHanded++;
        }
      }
      row++;
    } else {
      for (let bot of botUindexes) {
        if (seats[bot - 1] !== "R") {
          leftHanded++;
        }
      }
    }
  });

  return leftHanded;
}

console.log(
  findLeftHandedSeats([
    ["U", "R", "U", "L"],
    ["U", "R", "R", "R"],
  ])
);

console.log(
  findLeftHandedSeats([
    ["U", "U", "U", "U"],
    ["U", "U", "U", "U"],
  ])
);

console.log(
  findLeftHandedSeats([
    ["U", "R", "U", "R"],
    ["L", "R", "R", "U"],
  ])
);

// Logic

//1st loop for 1st array - to scan through the array inside
// 2nd loop
// - 1st array - Find the postion of each 'U'
// -- Check if U have R next to it, if no, then increment the finds seat
// - 2nd array
// -- Check if U have R before to it, if no, then increment the finds seat

// More efficient
function findLeftHandedSeatsV2(table) {
  let count = 0;
  table.forEach((row, rowIndex) => {
    row.forEach((seat, colIndex) => {
      if (seat !== "U") return;

      // Top row faces down -> left is colIndex + 1
      // Bottom row faces up -> left is colIndex - 1
      const leftIndex = rowIndex === 0 ? colIndex + 1 : colIndex - 1;

      if (row[leftIndex] !== "R") {
        count++;
      }
    });
  });

  return count;
}

console.log(
  findLeftHandedSeatsV2([
    ["U", "R", "U", "L"],
    ["U", "R", "R", "R"],
  ])
);

console.log(
  findLeftHandedSeatsV2([
    ["U", "U", "U", "U"],
    ["U", "U", "U", "U"],
  ])
);

console.log(
  findLeftHandedSeatsV2([
    ["U", "R", "U", "R"],
    ["L", "R", "R", "U"],
  ])
);
