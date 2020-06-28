import React from 'react';
import renderer from 'react-test-renderer';
import TodoTask from '../TodoTask.js';

test('Lista zadań jest pusta', () => {
    const tasks = [];
    const component = renderer.create(<TodoTask items={tasks} />);
    expect(component).toMatchSnapshot();
});

test('Lista zadań powinna zawierać 1 element', () => {
    const tasks = ['Zadanie 1'];
    const component = renderer.create(<TodoTask items={tasks} />);
    expect(component).toMatchSnapshot();
});

test('Lista zadań powinna zawierać 4 elementy', () => {
    const tasks = ['Zadanie 1','Zadanie 2', 'Zadanie 3', 'Zadanie 4'];
    const component = renderer.create(<TodoTask items={tasks} />);
    expect(component).toMatchSnapshot();
});