DevMountain Phoenix NoDb Project Rubric

To badge from DevMountain, you must do the required tasks, and get 3+ points.

When in doubt, ask your mentor if you are on track. Don't wait until the last second.

Requirement	Points	Max
1. 1 stateful component, not counting App.js	required	
2. 1 stateless functional component	required	
3. 1 GET endpoint in Express	required	
4. 1 endpoint that uses req.body	required	
5. each component above minimum	0.5	1
6. use a single component more that once	0.5	1
7. URL parameter	0.25	0.5
8. Query string parameter	0.25	0.5
9. external web API, per endpoint used	0.5	2
10. full CRUD	1	1
Descriptions of Tasks

A stateful component is defined with class extends Component and must contain state. The state must be modified somewhere.
A stateless functional component, or an SFC, is simply a function. Learn more here.
A GET endpoint should return some data that you show on your website.
To use req.body, you'll need a POST, PUT, or PATCH. If you use another HTTP verb, get it approved by your mentor first.
Define and use multiple components!
This means if you define e.g. an <Icon> component, you rendered it in 2+ places in the website. You would receive 0.5 points for 2+ uses of <Icon>. If you also defined e.g. <ListItem> and rendered it 2+ times, you would receive another 0.5 points, for a total of the maximum 1 point. A good place to render ListItem components would be in a loop or .map().
URL parameters are like the :id in /api/books/:id.
Query string parameters are like the name (and associated value) in /api/books/search?name=harry.
API is a broad term, but we mean web requests using axios or similar. The simplest definition is axios is needed to obtain/mutate data. You get 0.5 points per endpoint. You could do different requests from a single API (not counting URL or query string parameters), or one or more requests from multiple APIs.
Full CRUD means create, read, update, and delete, aka POST, GET, PUT/PATCH, DELETE from your own server.
Presentations

You will present to your mentor groups. Presentations are informal. They take about 2-3 minutes or so. You will present as a developer, as opposed to a 'business' trying to get someone to use your product. There's no pressure to make this great, there is no grade. You will show off the product, code if you want to show a neat part, and your takeaway from the experience.
