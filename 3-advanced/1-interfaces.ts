// write an interface example and a class which implements it
interface CameraInf {
  mode: string;
  takePhoto(): string;
  recordVideo(): string;
}

interface Filter {
  applyFilter(): string;
}

class Phone implements CameraInf, Filter {
  mode: string = "auto";
  takePhoto(): string {
    return "Photo taken";
  }

  recordVideo(): string {
    return "Video recorded";
  }

  applyFilter(): string {
    return "Filter applied";
  }
}

class DSLR implements CameraInf {
  mode: string = "manual";
  takePhoto(): string {
    return "DSLR Photo taken";
  }

  recordVideo(): string {
    return "DSLR Video recorded";
  }
}
export {};
