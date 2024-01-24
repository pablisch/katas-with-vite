import { Node, LinkedList } from './LinkedList';

describe('Node', () => {
  test.each([
    [5, { value: 5, next: null }],
    [10, { value: 10, next: null }],
    ['teapot', { value: 'teapot', next: null }],
  ])('should create a Node object', (value, expectedNode) => {
    expect(new Node(value)).toEqual(expectedNode)
  })
})

describe('LinkedList', () => {
  test('isEmpty() should return true when called on a new, empty linked list', () => {
    // Arrange
    const list = new LinkedList();
    // Act
    const result = list.isEmpty();
    // Assert
    expect(result).toBe(true);
  })
  
  test('isEmpty() should return false when called on non-empty linked list', () => {
    // Arrange
    const list = new LinkedList();
    list.prepend(1);
    // Act
    const result = list.isEmpty();
    // Assert
    expect(result).toBe(false);
  })

  test.each([
    [[], 0],
    [[1], 1],
    [[1,2,3,4,8], 5],
  ])('getSize() should return the number of nodes in a linked list', (nodeValueArray, expectedSize) => {
    // Arrange
    const list = new LinkedList();
    nodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    // Act
    const result = list.getSize();
    // Assert
    expect(result).toBe(expectedSize);
  })
  
  test.each([
    [[], 'null'],
    [[1, 2],'2 -> 1 -> null'],
    [[1,2,3,4,5], '5 -> 4 -> 3 -> 2 -> 1 -> null'],
  ])('print() should return a string indicating the shape and values of a linked list', (nodeValueArray, expectedListString) => {
    // Arrange
    const list = new LinkedList();
    nodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    // Act
    const result = list.print();
    // Assert
    expect(result).toBe(expectedListString)
  })
  
  test.each([
    [[], 0, 'null', [1], '1 -> null'],
    [[1], 1, '1 -> null', [2, 3], '3 -> 2 -> 1 -> null'],
    [[1,2,3,4,5], 5, '5 -> 4 -> 3 -> 2 -> 1 -> null', [13, 18, 20, 21], '21 -> 20 -> 18 -> 13 -> 5 -> 4 -> 3 -> 2 -> 1 -> null'],
  ])('multiple prepend()s should add a nodes at the start of a linked list tested against getSize() and print()', (initialNodeValueArray, initialSize, initialListString, prependedNodeValueArray, expectedFinalListString) => {
    // Arrange
    const list = new LinkedList();
    initialNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const size = list.getSize();
    const listString = list.print();
    expect(size).toBe(initialSize);
    expect(listString).toBe(initialListString);
    // Act
    prependedNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const sizeResult = list.getSize();
    const listStringResult = list.print();
    // Assert
    expect(sizeResult).toBe(initialSize + prependedNodeValueArray.length);
    expect(listStringResult).toBe(expectedFinalListString)
  })
  
  test.each([
    [[], 0, 'null', 1, '1 -> null'],
    [[1], 1, '1 -> null', 2, '2 -> 1 -> null'],
    [[1,2,3,4,5], 5, '5 -> 4 -> 3 -> 2 -> 1 -> null', 13, '13 -> 5 -> 4 -> 3 -> 2 -> 1 -> null'],
  ])('prepend() should add a node at the start of a linked list tested against getSize() and print()', (initialNodeValueArray, initialSize, initialListString, prependedNodeValue, expectedFinalListString) => {
    // Arrange
    const list = new LinkedList();
    initialNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const size = list.getSize();
    const listString = list.print();
    expect(size).toBe(initialSize);
    expect(listString).toBe(initialListString);
    // Act
    list.prepend(prependedNodeValue);
    const sizeResult = list.getSize();
    const listStringResult = list.print();
    // Assert
    expect(sizeResult).toBe(initialSize + 1);
    expect(listStringResult).toBe(expectedFinalListString)
  })
  
  test.each([
    [[], 0, 'null', 1, '1 -> null'],
    [[1], 1, '1 -> null', 2, '1 -> 2 -> null'],
    [[1,2,3,4,5], 5, '5 -> 4 -> 3 -> 2 -> 1 -> null', 13, '5 -> 4 -> 3 -> 2 -> 1 -> 13 -> null'],
  ])('append() should add a node at the end of a linked list tested against getSize() and print()', (initialNodeValueArray, initialSize, initialListString, appendedNodeValue, expectedFinalListString) => {
    // Arrange
    const list = new LinkedList();
    initialNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const size = list.getSize();
    const listString = list.print();
    expect(size).toBe(initialSize);
    expect(listString).toBe(initialListString);
    // Act
    list.append(appendedNodeValue);
    const sizeResult = list.getSize();
    const listStringResult = list.print();
    // Assert
    expect(sizeResult).toBe(initialSize + 1);
    expect(listStringResult).toBe(expectedFinalListString)
  })
  
  test.each([
    [[], 0, 'null', [1], '1 -> null'],
    [[1], 1, '1 -> null', [2, 3, 4], '1 -> 2 -> 3 -> 4 -> null'],
    [[1,2,3,4,5], 5, '5 -> 4 -> 3 -> 2 -> 1 -> null', [13, 15, 17, 19, 21], '5 -> 4 -> 3 -> 2 -> 1 -> 13 -> 15 -> 17 -> 19 -> 21 -> null'],
  ])('multiple append()s should add a nodes at the end of a linked list tested against getSize() and print()', (initialNodeValueArray, initialSize, initialListString, appendedNodeValueArray, expectedFinalListString) => {
    // Arrange
    const list = new LinkedList();
    initialNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const size = list.getSize();
    const listString = list.print();
    expect(size).toBe(initialSize);
    expect(listString).toBe(initialListString);
    // Act
    appendedNodeValueArray.forEach(nodeValue => list.append(nodeValue));
    const sizeResult = list.getSize();
    const listStringResult = list.print();
    // Assert
    expect(sizeResult).toBe(initialSize + appendedNodeValueArray.length);
    expect(listStringResult).toBe(expectedFinalListString)
  })

  test.each([
    [[], 'null', 1, 0, '1 -> null'],
    [[1, 3], '3 -> 1 -> null', 2, 1, '3 -> 2 -> 1 -> null'],
    [[1,2,3,4,5], '5 -> 4 -> 3 -> 2 -> 1 -> null', 13, 3, '5 -> 4 -> 3 -> 13 -> 2 -> 1 -> null'],
    [[1,2,3,4,5], '5 -> 4 -> 3 -> 2 -> 1 -> null', 13, 5, '5 -> 4 -> 3 -> 2 -> 1 -> 13 -> null'],
  ])('insertAt() should add a node at the specfied index of a linked list', (initialNodeValueArray, initialListString, insertValue, insertIndex, expectedFinalListString) => {
    // Arrange
    const list = new LinkedList();
    initialNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const listString = list.print();
    expect(listString).toBe(initialListString);
    // Act
    list.insertAt(insertValue, insertIndex);
    const listStringResult = list.print();
    // Assert
    expect(listStringResult).toBe(expectedFinalListString)
  })

  test.each([
    [[1], '1 -> null', 0, 'null'],
    [[1, 3], '3 -> 1 -> null', 1, '3 -> null'],
    [[1,2,3,4,5], '5 -> 4 -> 3 -> 2 -> 1 -> null', 3, '5 -> 4 -> 3 -> 1 -> null'],
    [[1,2,3,4,5], '5 -> 4 -> 3 -> 2 -> 1 -> null', 4, '5 -> 4 -> 3 -> 2 -> null'],
  ])('deleteAt() should remove a node from the specfied index of a linked list', (initialNodeValueArray, initialListString, index, expectedFinalListString) => {
    // Arrange
    const list = new LinkedList();
    initialNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const listString = list.print();
    expect(listString).toBe(initialListString);
    // Act
    list.deleteAt(index);
    const listStringResult = list.print();
    // Assert
    expect(listStringResult).toBe(expectedFinalListString)
  })

  test.each([
    [[1], '1 -> null', 1, 'null'],
    [[1, 3], '3 -> 1 -> null', 1, '3 -> null'],
    [[1,2,3,4,5], '5 -> 4 -> 3 -> 2 -> 1 -> null', 3, '5 -> 4 -> 2 -> 1 -> null'],
    [[1,2,3,4,5], '5 -> 4 -> 3 -> 2 -> 1 -> null', 5, '4 -> 3 -> 2 -> 1 -> null'],
  ])('deleteValue() should remove a node from the specfied index of a linked list', (initialNodeValueArray, initialListString, value, expectedFinalListString) => {
    // Arrange
    const list = new LinkedList();
    initialNodeValueArray.forEach(nodeValue => list.prepend(nodeValue));
    const listString = list.print();
    expect(listString).toBe(initialListString);
    // Act
    list.deleteValue(value);
    const listStringResult = list.print();
    // Assert
    expect(listStringResult).toBe(expectedFinalListString)
  })
})