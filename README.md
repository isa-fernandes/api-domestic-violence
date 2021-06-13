
# API Domestic Violence

This API has the purpose of allowing domestic violence data visualization of reported cases in Pernambuco. This data was disclosed by Secretaria de Defesa Social do Estado de Pernambuco (SDS/PE).



## Installation 

Clone this repository, open the command line and navigate to the created folder. Then execute the following commands:

```bash 
  npm install
  npm start
```

And the server will run at localhost:3000
    
## API Reference

#### Get all domestic violence cases

```http
  GET /api/domestic-violence
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstIndex` | `integer` | **Optional**. First Index of the query. Only works if limit is defined. Useful for pagination. |
| `limit` | `integer` | **Optional**. Number of records to be returned. Only works if firstIndex is defined. Useful for pagination. |
| `city` | `string` | **Optional**. Filter records that contains this string in city column. |
| `region` | `string` | **Optional**. Filter records that have this exactly string in region column. |
| `nature` | `string` | **Optional**. Filter records that contains this string in nature column. |
| `startDate` | `date` | **Optional**. Filter records that occured after this date. |
| `endDate` | `date` | **Optional**. Filter records that occured before this date. |
| `year` | `integer` | **Optional**. Filter records that occured in this year. |
| `sex` | `string` | **Optional**. Filter records that have this exactly string in sex column. |
| `age` | `string` | **Optional**. Filter records that have this exactly string in age column. |
| `involved` | `integer` | **Optional**. Filter records that have this exactly number of involved persons. |

#### Get regions

```http
  GET /api/regions
```
Returns an array of existent regions in the dataset.

#### Get years

```http
  GET /api/years
```
Returns an array of existent years in the dataset.

#### Get sex

```http
  GET /api/sex
```
Returns an array of existent sex in the dataset.

#### Get ages

```http
  GET /api/age
```
Returns an array of existent age in the dataset.

#### Get quantity of involved persons

```http
  GET /api/involved
```
Returns an array of existent involved in the dataset.
  
## Usage/Examples

Get the first 20 records filtering where region is AGRESTE, year is 2021, nature contains LESÃO and end date is 31/01/2021
```http
http://localhost:3000/api/domestic-violence?firstIndex=0&limit=20&region=AGRESTE&year=2021&nature=LES%C3%83O&endDate=2021-1-31
```

Get all regions
```http
http://localhost:3000/api/regions
```
