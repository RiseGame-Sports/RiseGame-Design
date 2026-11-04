window.ELEVATE = {
  athletes: [
    { id: 'jw', initials: 'JW', name: 'Jameson Warren', hometown: 'Houston, TX', birthdate: 'Dec 11, 2014', gender: 'Male',
      sports: ['Baseball', 'Basketball', 'Football', 'Strength & Conditioning'],
      parents: ['Aaron Warren', 'Jamie Warren'], code: 'JW-4821',
      week: { workouts: 3, assigned: 4, attendance: 92 },
      general: [
        { name: 'Height', unit: 'inches', type: 'Height', entries: [{ v: 57, label: "4'9\"", date: 'Jun 23, 2026' }, { v: 59, label: "4'11\"", date: 'Aug 4, 2026' }, { v: 62, label: "5'2\"", date: 'Sep 5, 2026' }] },
        { name: 'Weight', unit: 'lbs', type: 'Weight', entries: [{ v: 91, label: '91 lbs', date: 'May 2, 2026' }, { v: 94, label: '94 lbs', date: 'Jun 23, 2026' }, { v: 97, label: '97 lbs', date: 'Aug 4, 2026' }, { v: 99, label: '99 lbs', date: 'Sep 5, 2026' }] },
        { name: 'Shoe Size', unit: 'size', type: 'Custom', entries: [{ v: 6.5, label: '6.5 size', date: 'Aug 4, 2026' }] },
      ],
      baseball: [
        { name: 'Exit Velo', unit: 'mph', type: 'Speed', entries: [{ v: 48, label: '48 mph', date: 'Jul 12, 2026' }, { v: 51, label: '51 mph', date: 'Aug 9, 2026' }, { v: 54, label: '54 mph', date: 'Sep 1, 2026' }] },
        { name: '60 Yard Dash', unit: 's', type: 'Speed', entries: [{ v: 9.4, label: '9.40 s', date: 'Jul 12, 2026' }, { v: 9.1, label: '9.10 s', date: 'Sep 1, 2026' }] },
      ],
      assignments: [
        { title: 'Thursday Legs', sport: 'Strength & Conditioning', pts: 20, status: 'Due today', done: false },
        { title: 'Tuesday Agility Session', sport: 'Baseball', pts: 30, status: 'Complete', done: true },
        { title: 'Arm Care — Band Series', sport: 'Baseball', pts: 15, status: 'Complete', done: true },
      ],
    },
    { id: 'hw', initials: 'HW', name: 'Hannah Warren', hometown: 'Houston, TX', birthdate: 'Mar 2, 2012', gender: 'Female',
      sports: ['Strength & Conditioning', 'Volleyball'], parents: ['Aaron Warren', 'Jamie Warren'], code: 'HW-7730',
      week: { workouts: 2, assigned: 3, attendance: 100 },
      general: [
        { name: 'Height', unit: 'inches', type: 'Height', entries: [{ v: 64, label: "5'4\"", date: 'Jun 23, 2026' }, { v: 65, label: "5'5\"", date: 'Sep 5, 2026' }] },
        { name: 'Weight', unit: 'lbs', type: 'Weight', entries: [{ v: 118, label: '118 lbs', date: 'Jun 23, 2026' }, { v: 121, label: '121 lbs', date: 'Sep 5, 2026' }] },
      ],
      baseball: [],
      assignments: [{ title: 'Vertical Jump Block', sport: 'Volleyball', pts: 25, status: 'Due Fri', done: false }],
    },
  ],
  coParents: [{ athlete: 'Jameson Warren', who: 'Jamie Warren' }, { athlete: 'Hannah Warren', who: 'Jamie Warren' }],
  workout: {
    title: 'Thursday Legs', sport: 'Strength & Conditioning', template: true,
    exercises: [
      { n: 1, name: 'Jumping Jacks', spec: '60s', pts: 10, note: 'Standard jumping jacks at a steady pace.' },
      { n: 2, name: 'Burpees', spec: '3 sets × 10 reps', pts: 10, note: 'Full burpees with push-up and jump.' },
    ],
  },
  sports: ['Baseball','Basketball','Cheerleading','Cricket','Cross Country','Dance','Field Hockey','Football','Golf','Gymnastics','Hockey','Lacrosse','Martial Arts/Karate','Soccer','Softball','Strength & Conditioning','Swimming','Tennis','Track & Field','Volleyball','Wrestling'],
};
