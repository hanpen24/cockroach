// Copyright 2021 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

import classnames from "classnames/bind";
import React, { useContext } from "react";

import { CockroachCloudContext } from "../contexts";

import styles from "./pageConfig.module.scss";

export interface PageConfigProps {
  layout?: "list" | "spread";
  children?: React.ReactNode;
  whiteBkg?: boolean;
  className?: string;
}

const cx = classnames.bind(styles);

export function PageConfig(props: PageConfigProps): React.ReactElement {
  const whiteBkg = useContext(CockroachCloudContext) || props.whiteBkg;

  const classes = cx({
    "page-config__list": props.layout !== "spread",
    "page-config__spread": props.layout === "spread",
  });

  return (
    <div
      className={`${cx("page-config", {
        "page-config__white-background": whiteBkg,
      })} ${props.className}`}
    >
      <ul className={classes}>{props.children}</ul>
    </div>
  );
}

export interface PageConfigItemProps {
  children?: React.ReactNode;
  className?: string;
  minWidth?: string;
}

export function PageConfigItem(props: PageConfigItemProps): React.ReactElement {
  const minWidth = props.minWidth;
  const itemStyles = React.useMemo(
    () => ({
      minWidth: minWidth || undefined,
    }),
    [minWidth],
  );

  return (
    <li className={cx("page-config__item", props.className)} style={itemStyles}>
      {props.children}
    </li>
  );
}
