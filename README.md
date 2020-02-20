# Culture-Portal - Photographers of Belarus 

It is a web portal about culture of Belarus.

Installation:
------------
npm run build

### [Live demo of the Culture-Portal page]()

#### Worklog

*slolkunchik*

| time spent | feature |
|-------------|-------------|
| 4h | base structure of the project with CRA |
| 6h | add tabs element for styleguide |

*Viacheslav*

| time spent | feature |
|-------------|-------------|
| 3h | design and markup for main page |
| 2h | markup for author page |
| 4h | setup geowidget |

*helly-15*

| time spent | feature |
|-------------|-------------|
| 2h | data JSON creation |
| 5h | learning project structure and technologies |
| 2h | author description component |
| 8h | main page |


## Description
The portal contains the following components / functional parts / blocks:

* Main page with
  * portal's description
  * 'author of the day' block
  * developer team description (userpics + github accounts + nicknames/names), and contribution of each member
* Navigation
* Page with a list of authors on the given topic with search widget
  * search is on the current language with ability to search by name, city/place of birth
* Page of an author with
  * Author's name
  * Years of life
  * his/her picture
  * biography in the form of timeline 
  * list of artist's works with the date of creation
  * photo gallery with author's picture and pictures of his/her works 
  * youtube video about the author / works / period of time author lived. Video opens in a new overlay (modal)
  * place of author's major activity on a map

## Technical limitations
The portal was developed using **React** and library of visual components such as **material-ui**.
It is relatively correctly displayed on tablets and mobile phones.
