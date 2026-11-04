window.DRAFT_DATA = {
  league: 'Cypress Youth Baseball · 10U Majors',
  drills: ['Fielding', 'Throwing', 'Hitting', 'Speed', 'Pitching'],
  teams: ['Rockets', 'Bandits', 'Sluggers', 'Outlaws'],
  pool: [
    { number: 41, name: 'Cameron Diaz', age: 11, scores: [5, 4, 4, 5, 3], note: 'Reads the ball off the bat early. Strong arm from the outfield.' },
    { number: 14, name: 'Jordan Reyes', age: 11, scores: [4, 4, 5, 4, 4], note: 'Best bat in the group. Confident at the plate.' },
    { number: 22, name: 'Alex Whitfield', age: 11, scores: [3, 3, 3, 4, 2], note: 'Quick feet. Needs reps on throwing mechanics.' },
    { number: 7, name: 'Sam Ortiz', age: 10, scores: [4, 3, 3, 3, 4], note: 'Coachable. Good instincts on the mound.' },
    { number: 3, name: 'Micah Bell', age: 10, scores: [3, 4, 2, 3, 3], note: 'Steady glove. Contact is coming along.' },
    { number: 9, name: 'Riley Nakamura', age: 10, scores: [2, 3, 3, 4, 2], note: 'Fastest in the division. Raw at the plate.' },
  ],
};
window.DRAFT_DATA.pool.forEach(p => { p.avg = (p.scores.reduce((a,b)=>a+b,0) / p.scores.length).toFixed(1); });
