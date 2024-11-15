// CodeSignal Intro - Island of Knowledge No.21

// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.

// There is no first number.

function solution(inputString) {
  if (!/^\d+\.\d+\.\d+\.\d+$/.test(inputString)) return false
  const nums = inputString.split('.');
  console.log(nums)
  return nums.filter(num => num !== '' && num >= 0 && num <= 255 && !/^0\d+$/.test(num)).length === 4;
}

// console.log(solution("172.16.254.1"), true);
// console.log(solution("0.254.255.0"), true);
// console.log(solution(".254.255.0"), false);
// console.log(solution("172.316.254.1"), false);
// console.log(solution("01.233.161.131"), false);
// console.log(solution("0..1.0.0"), false);