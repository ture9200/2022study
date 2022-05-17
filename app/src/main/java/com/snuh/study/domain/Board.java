package com.snuh.study.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain=true)
public class Board {
  int boardNo;
  String title;
  String content;
  int viewCount;
  java.sql.Date date;

  
}