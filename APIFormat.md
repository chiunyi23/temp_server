# API Format

## TODO
- [ ] Revenue 頁面加上機台編號 filter
- [ ] Vending Machine Information Page or showing info when the card is hovered

## Revenue Page
- day revenue
    - `/api/day_revenue/all`
    - number
- week revenue
    - `/api/week_revenue/all`
    - number
- month revenue
    - `/api/month_revenue/all`
    - number
- year revenue
    - `/api/year_revenue/all`
    - number

- revenue per day
    - `/api/week_list/:machine_id`
    - array of number
    - ex: [922, 1012, 1201, 900, 1001, 970, 1200]
- revenue per week
    - `api/month_list/:machine_id`
    - array of number
    - ex: [30192, 30918, 30148, ...]


## Ranking Page

- top month revenue
    - `/api/month_revenue/top`
    - array
    - ex: [41019, "machine_id", "理工二館一樓"]
- top week revenue

- revenue per machine per month
    - `/api/month_revenue/ranking_list`
    - array (由高到低排序營收)
    - ex: [42911, 40139, 39109, ...]

- revenue per machine per week

## Vending Machine Information Page

- 