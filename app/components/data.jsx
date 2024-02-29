import React from "react";

const rows = [
    {
      id: "1",
      car: "Mini Cooper 2020",
      image: "https://s3-alpha-sig.figma.com/img/7afa/20c6/b01e3b42a0113cc3df0e5189dbe5c75e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pV7rxeWCUfB6FmQEBgZemk0tPsQA1jeQwVfFplJpCOyD8RNHKrqekbJL3PpUUIb9EpyzNtEuPJzOv9i-fQkb3Z7laDik2SmDNdsZp1rKW3aH3NF6oANGeHAjNwTZmuDbK3ys-~78vD3wvdK6XRAMO7ozlbuLb6CkvvjOCTb~Ic-WAcMs~pVxhlG-J-lnIdYufsR8V~6QmmAqzoCfhM01uqDTdrQXLNkHjZrJEopO3Zl6wLIIEcrHstfWxY4jdF7kBxS1kED0HDz5VLTkARms3JZH9hoQ73MLSwgRxCmjbyXqE4ZP4veeu9odMLajTcBJ0tFcCP9675ezgixvulE-~g__",
      nextReservation: "11/07",
      status: "available",
      rating: "",
      actions: ""
    },
    {
      id: "2",
      car: "Mini Cooper 2020",
      image: "https://s3-alpha-sig.figma.com/img/7afa/20c6/b01e3b42a0113cc3df0e5189dbe5c75e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pV7rxeWCUfB6FmQEBgZemk0tPsQA1jeQwVfFplJpCOyD8RNHKrqekbJL3PpUUIb9EpyzNtEuPJzOv9i-fQkb3Z7laDik2SmDNdsZp1rKW3aH3NF6oANGeHAjNwTZmuDbK3ys-~78vD3wvdK6XRAMO7ozlbuLb6CkvvjOCTb~Ic-WAcMs~pVxhlG-J-lnIdYufsR8V~6QmmAqzoCfhM01uqDTdrQXLNkHjZrJEopO3Zl6wLIIEcrHstfWxY4jdF7kBxS1kED0HDz5VLTkARms3JZH9hoQ73MLSwgRxCmjbyXqE4ZP4veeu9odMLajTcBJ0tFcCP9675ezgixvulE-~g__",
      nextReservation: "11/07",
      status: "available",
      rating: "",
      actions: ""
    },
    {
      id: "3",
      car: "Mini Cooper 2020",
      image: "https://s3-alpha-sig.figma.com/img/7afa/20c6/b01e3b42a0113cc3df0e5189dbe5c75e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pV7rxeWCUfB6FmQEBgZemk0tPsQA1jeQwVfFplJpCOyD8RNHKrqekbJL3PpUUIb9EpyzNtEuPJzOv9i-fQkb3Z7laDik2SmDNdsZp1rKW3aH3NF6oANGeHAjNwTZmuDbK3ys-~78vD3wvdK6XRAMO7ozlbuLb6CkvvjOCTb~Ic-WAcMs~pVxhlG-J-lnIdYufsR8V~6QmmAqzoCfhM01uqDTdrQXLNkHjZrJEopO3Zl6wLIIEcrHstfWxY4jdF7kBxS1kED0HDz5VLTkARms3JZH9hoQ73MLSwgRxCmjbyXqE4ZP4veeu9odMLajTcBJ0tFcCP9675ezgixvulE-~g__",
      nextReservation: "11/07",
      status: "available",
      rating: "",
      actions: ""
    },
    {
      id: "4",
      car: "Mini Cooper 2020",
      image: "https://s3-alpha-sig.figma.com/img/7afa/20c6/b01e3b42a0113cc3df0e5189dbe5c75e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pV7rxeWCUfB6FmQEBgZemk0tPsQA1jeQwVfFplJpCOyD8RNHKrqekbJL3PpUUIb9EpyzNtEuPJzOv9i-fQkb3Z7laDik2SmDNdsZp1rKW3aH3NF6oANGeHAjNwTZmuDbK3ys-~78vD3wvdK6XRAMO7ozlbuLb6CkvvjOCTb~Ic-WAcMs~pVxhlG-J-lnIdYufsR8V~6QmmAqzoCfhM01uqDTdrQXLNkHjZrJEopO3Zl6wLIIEcrHstfWxY4jdF7kBxS1kED0HDz5VLTkARms3JZH9hoQ73MLSwgRxCmjbyXqE4ZP4veeu9odMLajTcBJ0tFcCP9675ezgixvulE-~g__  ",
      nextReservation: "11/07",
      status: "available",
      rating: "",
      actions: ""
    },
  ];
  
  const columns = [
    {
      key: "car",
      label: "CAR",
    },
    {
      key: "nextReservation",
      label: "NEXT RESERVATION",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
        key: "rating",
        label: "RATING",
    },
    {
        key: "actions",
        label: "ACTIONS",
    },
  ];

export {columns, rows};
