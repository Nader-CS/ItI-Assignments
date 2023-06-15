void main() {
  Map<int, String> myMap = {
    0: "nader",
    1: "ahmed",
    2: "omar",
  };
  greeting(processMap, myMap);
}

void processMap(Map<int, String> map) {
  map.forEach((key, value) {
    print("Hello : $value");
  });
}

void greeting(Function function,Map<int, String> map){
  function(map);
}