def resolution_streak(days):
    countDays = 0;
    successfulDays = 0;

    for day in days:
        countDays += 1
        if day[0] >= 10000 and day[1] <= 120 and day[2] >= 5:
            successfulDays += 1
        else:
            return f"Resolution failed on day {countDays}: {successfulDays} day streak.";

    return f"Resolution on track: {successfulDays} day streak."

print(resolution_streak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]))
print(resolution_streak([[10000, 120, 5], [10950, 121, 11]]))
print(resolution_streak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]]))