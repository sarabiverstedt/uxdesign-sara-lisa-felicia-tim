import "./Co2.css";

import Vid from "../../Images/StigandeHavsniva.mp4";
import { useState } from "react";
import ReactPlayer from "react-player";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { color } from "@mui/system";

const co2data = [
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1751
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1752
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1753
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1754
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1755
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1756
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1757
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1758
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1759
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1760
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1761
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1762
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1763
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1764
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1765
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1766
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1767
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1768
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1769
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 3.0,
    "Total": 3.0,
    "Year": 1770
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1771
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1772
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1773
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1774
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1775
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1776
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1777
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1778
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1779
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 4.0,
    "Total": 4.0,
    "Year": 1780
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1781
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1782
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1783
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1784
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1785
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1786
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1787
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1788
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1789
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 5.0,
    "Total": 5.0,
    "Year": 1790
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 6.0,
    "Total": 6.0,
    "Year": 1791
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 6.0,
    "Total": 6.0,
    "Year": 1792
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 6.0,
    "Total": 6.0,
    "Year": 1793
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 6.0,
    "Total": 6.0,
    "Year": 1794
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 6.0,
    "Total": 6.0,
    "Year": 1795
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 6.0,
    "Total": 6.0,
    "Year": 1796
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 7.0,
    "Total": 7.0,
    "Year": 1797
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 7.0,
    "Total": 7.0,
    "Year": 1798
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 7.0,
    "Total": 7.0,
    "Year": 1799
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 8.0,
    "Total": 8.0,
    "Year": 1800
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 8.0,
    "Total": 8.0,
    "Year": 1801
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 10.0,
    "Total": 10.0,
    "Year": 1802
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 9.0,
    "Total": 9.0,
    "Year": 1803
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 9.0,
    "Total": 9.0,
    "Year": 1804
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 9.0,
    "Total": 9.0,
    "Year": 1805
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 10.0,
    "Total": 10.0,
    "Year": 1806
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 10.0,
    "Total": 10.0,
    "Year": 1807
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 10.0,
    "Total": 10.0,
    "Year": 1808
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 10.0,
    "Total": 10.0,
    "Year": 1809
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 10.0,
    "Total": 10.0,
    "Year": 1810
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 11.0,
    "Total": 11.0,
    "Year": 1811
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 11.0,
    "Total": 11.0,
    "Year": 1812
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 11.0,
    "Total": 11.0,
    "Year": 1813
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 11.0,
    "Total": 11.0,
    "Year": 1814
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 12.0,
    "Total": 12.0,
    "Year": 1815
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 13.0,
    "Total": 13.0,
    "Year": 1816
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 14.0,
    "Total": 14.0,
    "Year": 1817
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 14.0,
    "Total": 14.0,
    "Year": 1818
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 14.0,
    "Total": 14.0,
    "Year": 1819
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 14.0,
    "Total": 14.0,
    "Year": 1820
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 14.0,
    "Total": 14.0,
    "Year": 1821
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 15.0,
    "Total": 15.0,
    "Year": 1822
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 16.0,
    "Total": 16.0,
    "Year": 1823
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 16.0,
    "Total": 16.0,
    "Year": 1824
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 17.0,
    "Total": 17.0,
    "Year": 1825
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 17.0,
    "Total": 17.0,
    "Year": 1826
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 18.0,
    "Total": 18.0,
    "Year": 1827
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 18.0,
    "Total": 18.0,
    "Year": 1828
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 18.0,
    "Total": 18.0,
    "Year": 1829
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 24.0,
    "Total": 24.0,
    "Year": 1830
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 23.0,
    "Total": 23.0,
    "Year": 1831
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 23.0,
    "Total": 23.0,
    "Year": 1832
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 24.0,
    "Total": 24.0,
    "Year": 1833
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 24.0,
    "Total": 24.0,
    "Year": 1834
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 25.0,
    "Total": 25.0,
    "Year": 1835
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 29.0,
    "Total": 29.0,
    "Year": 1836
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 29.0,
    "Total": 29.0,
    "Year": 1837
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 30.0,
    "Total": 30.0,
    "Year": 1838
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 31.0,
    "Total": 31.0,
    "Year": 1839
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 33.0,
    "Total": 33.0,
    "Year": 1840
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 34.0,
    "Total": 34.0,
    "Year": 1841
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 36.0,
    "Total": 36.0,
    "Year": 1842
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 37.0,
    "Total": 37.0,
    "Year": 1843
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 39.0,
    "Total": 39.0,
    "Year": 1844
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 43.0,
    "Total": 43.0,
    "Year": 1845
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 43.0,
    "Total": 43.0,
    "Year": 1846
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 46.0,
    "Total": 46.0,
    "Year": 1847
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 47.0,
    "Total": 47.0,
    "Year": 1848
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 50.0,
    "Total": 50.0,
    "Year": 1849
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 54.0,
    "Total": 54.0,
    "Year": 1850
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 54.0,
    "Total": 54.0,
    "Year": 1851
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 57.0,
    "Total": 57.0,
    "Year": 1852
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 59.0,
    "Total": 59.0,
    "Year": 1853
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 69.0,
    "Total": 69.0,
    "Year": 1854
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 71.0,
    "Total": 71.0,
    "Year": 1855
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 76.0,
    "Total": 76.0,
    "Year": 1856
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 77.0,
    "Total": 77.0,
    "Year": 1857
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 78.0,
    "Total": 78.0,
    "Year": 1858
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 83.0,
    "Total": 83.0,
    "Year": 1859
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 91.0,
    "Total": 91.0,
    "Year": 1860
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 95.0,
    "Total": 95.0,
    "Year": 1861
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 96.0,
    "Total": 97.0,
    "Year": 1862
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 103.0,
    "Total": 104.0,
    "Year": 1863
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 112.0,
    "Total": 112.0,
    "Year": 1864
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 119.0,
    "Total": 119.0,
    "Year": 1865
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 122.0,
    "Total": 122.0,
    "Year": 1866
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 130.0,
    "Total": 130.0,
    "Year": 1867
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 134.0,
    "Total": 135.0,
    "Year": 1868
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 0.0,
    "Per Capita": null,
    "Solid Fuel": 142.0,
    "Total": 142.0,
    "Year": 1869
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 1.0,
    "Per Capita": null,
    "Solid Fuel": 146.0,
    "Total": 147.0,
    "Year": 1870
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 1.0,
    "Per Capita": null,
    "Solid Fuel": 156.0,
    "Total": 156.0,
    "Year": 1871
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 1.0,
    "Per Capita": null,
    "Solid Fuel": 173.0,
    "Total": 173.0,
    "Year": 1872
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 1.0,
    "Per Capita": null,
    "Solid Fuel": 183.0,
    "Total": 184.0,
    "Year": 1873
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 1.0,
    "Per Capita": null,
    "Solid Fuel": 173.0,
    "Total": 174.0,
    "Year": 1874
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 1.0,
    "Per Capita": null,
    "Solid Fuel": 187.0,
    "Total": 188.0,
    "Year": 1875
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 1.0,
    "Per Capita": null,
    "Solid Fuel": 190.0,
    "Total": 191.0,
    "Year": 1876
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 2.0,
    "Per Capita": null,
    "Solid Fuel": 192.0,
    "Total": 194.0,
    "Year": 1877
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 2.0,
    "Per Capita": null,
    "Solid Fuel": 194.0,
    "Total": 196.0,
    "Year": 1878
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 3.0,
    "Per Capita": null,
    "Solid Fuel": 207.0,
    "Total": 210.0,
    "Year": 1879
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 3.0,
    "Per Capita": null,
    "Solid Fuel": 233.0,
    "Total": 236.0,
    "Year": 1880
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 4.0,
    "Per Capita": null,
    "Solid Fuel": 239.0,
    "Total": 243.0,
    "Year": 1881
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 4.0,
    "Per Capita": null,
    "Solid Fuel": 252.0,
    "Total": 256.0,
    "Year": 1882
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 3.0,
    "Per Capita": null,
    "Solid Fuel": 269.0,
    "Total": 272.0,
    "Year": 1883
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 0.0,
    "Liquid Fuel": 4.0,
    "Per Capita": null,
    "Solid Fuel": 271.0,
    "Total": 275.0,
    "Year": 1884
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 1.0,
    "Liquid Fuel": 4.0,
    "Per Capita": null,
    "Solid Fuel": 273.0,
    "Total": 277.0,
    "Year": 1885
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 5.0,
    "Per Capita": null,
    "Solid Fuel": 275.0,
    "Total": 281.0,
    "Year": 1886
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 3.0,
    "Liquid Fuel": 5.0,
    "Per Capita": null,
    "Solid Fuel": 287.0,
    "Total": 295.0,
    "Year": 1887
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 5.0,
    "Liquid Fuel": 5.0,
    "Per Capita": null,
    "Solid Fuel": 317.0,
    "Total": 327.0,
    "Year": 1888
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 3.0,
    "Liquid Fuel": 6.0,
    "Per Capita": null,
    "Solid Fuel": 318.0,
    "Total": 327.0,
    "Year": 1889
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 3.0,
    "Liquid Fuel": 8.0,
    "Per Capita": null,
    "Solid Fuel": 345.0,
    "Total": 356.0,
    "Year": 1890
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 9.0,
    "Per Capita": null,
    "Solid Fuel": 360.0,
    "Total": 372.0,
    "Year": 1891
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 9.0,
    "Per Capita": null,
    "Solid Fuel": 363.0,
    "Total": 374.0,
    "Year": 1892
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 10.0,
    "Per Capita": null,
    "Solid Fuel": 358.0,
    "Total": 370.0,
    "Year": 1893
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 9.0,
    "Per Capita": null,
    "Solid Fuel": 372.0,
    "Total": 383.0,
    "Year": 1894
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 11.0,
    "Per Capita": null,
    "Solid Fuel": 393.0,
    "Total": 406.0,
    "Year": 1895
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 12.0,
    "Per Capita": null,
    "Solid Fuel": 405.0,
    "Total": 419.0,
    "Year": 1896
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 13.0,
    "Per Capita": null,
    "Solid Fuel": 425.0,
    "Total": 440.0,
    "Year": 1897
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 2.0,
    "Liquid Fuel": 13.0,
    "Per Capita": null,
    "Solid Fuel": 449.0,
    "Total": 465.0,
    "Year": 1898
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 3.0,
    "Liquid Fuel": 14.0,
    "Per Capita": null,
    "Solid Fuel": 491.0,
    "Total": 507.0,
    "Year": 1899
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 3.0,
    "Liquid Fuel": 16.0,
    "Per Capita": null,
    "Solid Fuel": 515.0,
    "Total": 534.0,
    "Year": 1900
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 4.0,
    "Liquid Fuel": 18.0,
    "Per Capita": null,
    "Solid Fuel": 531.0,
    "Total": 552.0,
    "Year": 1901
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 4.0,
    "Liquid Fuel": 19.0,
    "Per Capita": null,
    "Solid Fuel": 543.0,
    "Total": 566.0,
    "Year": 1902
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 4.0,
    "Liquid Fuel": 20.0,
    "Per Capita": null,
    "Solid Fuel": 593.0,
    "Total": 617.0,
    "Year": 1903
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 4.0,
    "Liquid Fuel": 23.0,
    "Per Capita": null,
    "Solid Fuel": 597.0,
    "Total": 624.0,
    "Year": 1904
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 5.0,
    "Liquid Fuel": 23.0,
    "Per Capita": null,
    "Solid Fuel": 636.0,
    "Total": 663.0,
    "Year": 1905
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 5.0,
    "Liquid Fuel": 23.0,
    "Per Capita": null,
    "Solid Fuel": 680.0,
    "Total": 707.0,
    "Year": 1906
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 5.0,
    "Liquid Fuel": 28.0,
    "Per Capita": null,
    "Solid Fuel": 750.0,
    "Total": 784.0,
    "Year": 1907
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 5.0,
    "Liquid Fuel": 30.0,
    "Per Capita": null,
    "Solid Fuel": 714.0,
    "Total": 750.0,
    "Year": 1908
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 6.0,
    "Liquid Fuel": 32.0,
    "Per Capita": null,
    "Solid Fuel": 747.0,
    "Total": 785.0,
    "Year": 1909
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 7.0,
    "Liquid Fuel": 34.0,
    "Per Capita": null,
    "Solid Fuel": 778.0,
    "Total": 819.0,
    "Year": 1910
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 7.0,
    "Liquid Fuel": 36.0,
    "Per Capita": null,
    "Solid Fuel": 792.0,
    "Total": 836.0,
    "Year": 1911
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 8.0,
    "Liquid Fuel": 37.0,
    "Per Capita": null,
    "Solid Fuel": 834.0,
    "Total": 879.0,
    "Year": 1912
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 8.0,
    "Liquid Fuel": 41.0,
    "Per Capita": null,
    "Solid Fuel": 895.0,
    "Total": 943.0,
    "Year": 1913
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 8.0,
    "Liquid Fuel": 42.0,
    "Per Capita": null,
    "Solid Fuel": 800.0,
    "Total": 850.0,
    "Year": 1914
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 9.0,
    "Liquid Fuel": 45.0,
    "Per Capita": null,
    "Solid Fuel": 784.0,
    "Total": 838.0,
    "Year": 1915
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 10.0,
    "Liquid Fuel": 48.0,
    "Per Capita": null,
    "Solid Fuel": 842.0,
    "Total": 901.0,
    "Year": 1916
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 11.0,
    "Liquid Fuel": 54.0,
    "Per Capita": null,
    "Solid Fuel": 891.0,
    "Total": 955.0,
    "Year": 1917
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 10.0,
    "Liquid Fuel": 53.0,
    "Per Capita": null,
    "Solid Fuel": 873.0,
    "Total": 936.0,
    "Year": 1918
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 10.0,
    "Liquid Fuel": 61.0,
    "Per Capita": null,
    "Solid Fuel": 735.0,
    "Total": 806.0,
    "Year": 1919
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 11.0,
    "Liquid Fuel": 78.0,
    "Per Capita": null,
    "Solid Fuel": 843.0,
    "Total": 932.0,
    "Year": 1920
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 10.0,
    "Liquid Fuel": 84.0,
    "Per Capita": null,
    "Solid Fuel": 709.0,
    "Total": 803.0,
    "Year": 1921
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 11.0,
    "Liquid Fuel": 94.0,
    "Per Capita": null,
    "Solid Fuel": 740.0,
    "Total": 845.0,
    "Year": 1922
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 14.0,
    "Liquid Fuel": 111.0,
    "Per Capita": null,
    "Solid Fuel": 845.0,
    "Total": 970.0,
    "Year": 1923
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 16.0,
    "Liquid Fuel": 110.0,
    "Per Capita": null,
    "Solid Fuel": 836.0,
    "Total": 963.0,
    "Year": 1924
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 17.0,
    "Liquid Fuel": 116.0,
    "Per Capita": null,
    "Solid Fuel": 842.0,
    "Total": 975.0,
    "Year": 1925
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 19.0,
    "Liquid Fuel": 119.0,
    "Per Capita": null,
    "Solid Fuel": 846.0,
    "Total": 983.0,
    "Year": 1926
  },
  {
    "Cement": 0.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 21.0,
    "Liquid Fuel": 136.0,
    "Per Capita": null,
    "Solid Fuel": 905.0,
    "Total": 1062.0,
    "Year": 1927
  },
  {
    "Cement": 10.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 23.0,
    "Liquid Fuel": 143.0,
    "Per Capita": null,
    "Solid Fuel": 890.0,
    "Total": 1065.0,
    "Year": 1928
  },
  {
    "Cement": 10.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 28.0,
    "Liquid Fuel": 160.0,
    "Per Capita": null,
    "Solid Fuel": 947.0,
    "Total": 1145.0,
    "Year": 1929
  },
  {
    "Cement": 10.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 28.0,
    "Liquid Fuel": 152.0,
    "Per Capita": null,
    "Solid Fuel": 862.0,
    "Total": 1053.0,
    "Year": 1930
  },
  {
    "Cement": 8.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 25.0,
    "Liquid Fuel": 147.0,
    "Per Capita": null,
    "Solid Fuel": 759.0,
    "Total": 940.0,
    "Year": 1931
  },
  {
    "Cement": 7.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 24.0,
    "Liquid Fuel": 141.0,
    "Per Capita": null,
    "Solid Fuel": 675.0,
    "Total": 847.0,
    "Year": 1932
  },
  {
    "Cement": 7.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 25.0,
    "Liquid Fuel": 154.0,
    "Per Capita": null,
    "Solid Fuel": 708.0,
    "Total": 893.0,
    "Year": 1933
  },
  {
    "Cement": 8.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 28.0,
    "Liquid Fuel": 162.0,
    "Per Capita": null,
    "Solid Fuel": 775.0,
    "Total": 973.0,
    "Year": 1934
  },
  {
    "Cement": 9.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 30.0,
    "Liquid Fuel": 176.0,
    "Per Capita": null,
    "Solid Fuel": 811.0,
    "Total": 1027.0,
    "Year": 1935
  },
  {
    "Cement": 11.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 34.0,
    "Liquid Fuel": 192.0,
    "Per Capita": null,
    "Solid Fuel": 893.0,
    "Total": 1130.0,
    "Year": 1936
  },
  {
    "Cement": 11.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 38.0,
    "Liquid Fuel": 219.0,
    "Per Capita": null,
    "Solid Fuel": 941.0,
    "Total": 1209.0,
    "Year": 1937
  },
  {
    "Cement": 12.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 37.0,
    "Liquid Fuel": 214.0,
    "Per Capita": null,
    "Solid Fuel": 880.0,
    "Total": 1142.0,
    "Year": 1938
  },
  {
    "Cement": 13.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 38.0,
    "Liquid Fuel": 222.0,
    "Per Capita": null,
    "Solid Fuel": 918.0,
    "Total": 1192.0,
    "Year": 1939
  },
  {
    "Cement": 11.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 42.0,
    "Liquid Fuel": 229.0,
    "Per Capita": null,
    "Solid Fuel": 1017.0,
    "Total": 1299.0,
    "Year": 1940
  },
  {
    "Cement": 12.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 42.0,
    "Liquid Fuel": 236.0,
    "Per Capita": null,
    "Solid Fuel": 1043.0,
    "Total": 1334.0,
    "Year": 1941
  },
  {
    "Cement": 11.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 45.0,
    "Liquid Fuel": 222.0,
    "Per Capita": null,
    "Solid Fuel": 1063.0,
    "Total": 1342.0,
    "Year": 1942
  },
  {
    "Cement": 10.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 50.0,
    "Liquid Fuel": 239.0,
    "Per Capita": null,
    "Solid Fuel": 1092.0,
    "Total": 1391.0,
    "Year": 1943
  },
  {
    "Cement": 7.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 54.0,
    "Liquid Fuel": 275.0,
    "Per Capita": null,
    "Solid Fuel": 1047.0,
    "Total": 1383.0,
    "Year": 1944
  },
  {
    "Cement": 7.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 59.0,
    "Liquid Fuel": 275.0,
    "Per Capita": null,
    "Solid Fuel": 820.0,
    "Total": 1160.0,
    "Year": 1945
  },
  {
    "Cement": 10.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 61.0,
    "Liquid Fuel": 292.0,
    "Per Capita": null,
    "Solid Fuel": 875.0,
    "Total": 1238.0,
    "Year": 1946
  },
  {
    "Cement": 12.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 67.0,
    "Liquid Fuel": 322.0,
    "Per Capita": null,
    "Solid Fuel": 992.0,
    "Total": 1392.0,
    "Year": 1947
  },
  {
    "Cement": 14.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 76.0,
    "Liquid Fuel": 364.0,
    "Per Capita": null,
    "Solid Fuel": 1015.0,
    "Total": 1469.0,
    "Year": 1948
  },
  {
    "Cement": 16.0,
    "Gas Flaring": 0.0,
    "Gas Fuel": 81.0,
    "Liquid Fuel": 362.0,
    "Per Capita": null,
    "Solid Fuel": 960.0,
    "Total": 1419.0,
    "Year": 1949
  },
  {
    "Cement": 18.0,
    "Gas Flaring": 23.0,
    "Gas Fuel": 97.0,
    "Liquid Fuel": 423.0,
    "Per Capita": 0.64,
    "Solid Fuel": 1070.0,
    "Total": 1630.0,
    "Year": 1950
  },
  {
    "Cement": 20.0,
    "Gas Flaring": 24.0,
    "Gas Fuel": 115.0,
    "Liquid Fuel": 479.0,
    "Per Capita": 0.69,
    "Solid Fuel": 1129.0,
    "Total": 1767.0,
    "Year": 1951
  },
  {
    "Cement": 22.0,
    "Gas Flaring": 26.0,
    "Gas Fuel": 124.0,
    "Liquid Fuel": 504.0,
    "Per Capita": 0.68,
    "Solid Fuel": 1119.0,
    "Total": 1795.0,
    "Year": 1952
  },
  {
    "Cement": 24.0,
    "Gas Flaring": 27.0,
    "Gas Fuel": 131.0,
    "Liquid Fuel": 533.0,
    "Per Capita": 0.69,
    "Solid Fuel": 1125.0,
    "Total": 1841.0,
    "Year": 1953
  },
  {
    "Cement": 27.0,
    "Gas Flaring": 27.0,
    "Gas Fuel": 138.0,
    "Liquid Fuel": 557.0,
    "Per Capita": 0.69,
    "Solid Fuel": 1116.0,
    "Total": 1865.0,
    "Year": 1954
  },
  {
    "Cement": 30.0,
    "Gas Flaring": 31.0,
    "Gas Fuel": 150.0,
    "Liquid Fuel": 625.0,
    "Per Capita": 0.74,
    "Solid Fuel": 1208.0,
    "Total": 2042.0,
    "Year": 1955
  },
  {
    "Cement": 32.0,
    "Gas Flaring": 32.0,
    "Gas Fuel": 161.0,
    "Liquid Fuel": 679.0,
    "Per Capita": 0.77,
    "Solid Fuel": 1273.0,
    "Total": 2177.0,
    "Year": 1956
  },
  {
    "Cement": 34.0,
    "Gas Flaring": 35.0,
    "Gas Fuel": 178.0,
    "Liquid Fuel": 714.0,
    "Per Capita": 0.79,
    "Solid Fuel": 1309.0,
    "Total": 2270.0,
    "Year": 1957
  },
  {
    "Cement": 36.0,
    "Gas Flaring": 35.0,
    "Gas Fuel": 192.0,
    "Liquid Fuel": 731.0,
    "Per Capita": 0.8,
    "Solid Fuel": 1336.0,
    "Total": 2330.0,
    "Year": 1958
  },
  {
    "Cement": 40.0,
    "Gas Flaring": 36.0,
    "Gas Fuel": 206.0,
    "Liquid Fuel": 789.0,
    "Per Capita": 0.83,
    "Solid Fuel": 1382.0,
    "Total": 2454.0,
    "Year": 1959
  },
  {
    "Cement": 43.0,
    "Gas Flaring": 39.0,
    "Gas Fuel": 227.0,
    "Liquid Fuel": 849.0,
    "Per Capita": 0.85,
    "Solid Fuel": 1410.0,
    "Total": 2569.0,
    "Year": 1960
  },
  {
    "Cement": 45.0,
    "Gas Flaring": 42.0,
    "Gas Fuel": 240.0,
    "Liquid Fuel": 904.0,
    "Per Capita": 0.84,
    "Solid Fuel": 1349.0,
    "Total": 2580.0,
    "Year": 1961
  },
  {
    "Cement": 49.0,
    "Gas Flaring": 44.0,
    "Gas Fuel": 263.0,
    "Liquid Fuel": 980.0,
    "Per Capita": 0.86,
    "Solid Fuel": 1351.0,
    "Total": 2686.0,
    "Year": 1962
  },
  {
    "Cement": 51.0,
    "Gas Flaring": 47.0,
    "Gas Fuel": 286.0,
    "Liquid Fuel": 1052.0,
    "Per Capita": 0.88,
    "Solid Fuel": 1396.0,
    "Total": 2833.0,
    "Year": 1963
  },
  {
    "Cement": 57.0,
    "Gas Flaring": 51.0,
    "Gas Fuel": 316.0,
    "Liquid Fuel": 1137.0,
    "Per Capita": 0.92,
    "Solid Fuel": 1435.0,
    "Total": 2995.0,
    "Year": 1964
  },
  {
    "Cement": 59.0,
    "Gas Flaring": 55.0,
    "Gas Fuel": 337.0,
    "Liquid Fuel": 1219.0,
    "Per Capita": 0.94,
    "Solid Fuel": 1460.0,
    "Total": 3130.0,
    "Year": 1965
  },
  {
    "Cement": 63.0,
    "Gas Flaring": 60.0,
    "Gas Fuel": 364.0,
    "Liquid Fuel": 1323.0,
    "Per Capita": 0.97,
    "Solid Fuel": 1478.0,
    "Total": 3288.0,
    "Year": 1966
  },
  {
    "Cement": 65.0,
    "Gas Flaring": 66.0,
    "Gas Fuel": 392.0,
    "Liquid Fuel": 1423.0,
    "Per Capita": 0.98,
    "Solid Fuel": 1448.0,
    "Total": 3393.0,
    "Year": 1967
  },
  {
    "Cement": 70.0,
    "Gas Flaring": 73.0,
    "Gas Fuel": 424.0,
    "Liquid Fuel": 1551.0,
    "Per Capita": 1.01,
    "Solid Fuel": 1448.0,
    "Total": 3566.0,
    "Year": 1968
  },
  {
    "Cement": 74.0,
    "Gas Flaring": 80.0,
    "Gas Fuel": 467.0,
    "Liquid Fuel": 1673.0,
    "Per Capita": 1.05,
    "Solid Fuel": 1486.0,
    "Total": 3780.0,
    "Year": 1969
  },
  {
    "Cement": 78.0,
    "Gas Flaring": 87.0,
    "Gas Fuel": 493.0,
    "Liquid Fuel": 1839.0,
    "Per Capita": 1.1,
    "Solid Fuel": 1556.0,
    "Total": 4053.0,
    "Year": 1970
  },
  {
    "Cement": 84.0,
    "Gas Flaring": 88.0,
    "Gas Fuel": 530.0,
    "Liquid Fuel": 1947.0,
    "Per Capita": 1.12,
    "Solid Fuel": 1559.0,
    "Total": 4208.0,
    "Year": 1971
  },
  {
    "Cement": 89.0,
    "Gas Flaring": 94.0,
    "Gas Fuel": 560.0,
    "Liquid Fuel": 2057.0,
    "Per Capita": 1.14,
    "Solid Fuel": 1576.0,
    "Total": 4376.0,
    "Year": 1972
  },
  {
    "Cement": 95.0,
    "Gas Flaring": 110.0,
    "Gas Fuel": 588.0,
    "Liquid Fuel": 2241.0,
    "Per Capita": 1.18,
    "Solid Fuel": 1581.0,
    "Total": 4614.0,
    "Year": 1973
  },
  {
    "Cement": 96.0,
    "Gas Flaring": 107.0,
    "Gas Fuel": 597.0,
    "Liquid Fuel": 2245.0,
    "Per Capita": 1.16,
    "Solid Fuel": 1579.0,
    "Total": 4623.0,
    "Year": 1974
  },
  {
    "Cement": 95.0,
    "Gas Flaring": 92.0,
    "Gas Fuel": 604.0,
    "Liquid Fuel": 2132.0,
    "Per Capita": 1.13,
    "Solid Fuel": 1673.0,
    "Total": 4596.0,
    "Year": 1975
  },
  {
    "Cement": 103.0,
    "Gas Flaring": 108.0,
    "Gas Fuel": 630.0,
    "Liquid Fuel": 2314.0,
    "Per Capita": 1.18,
    "Solid Fuel": 1710.0,
    "Total": 4864.0,
    "Year": 1976
  },
  {
    "Cement": 108.0,
    "Gas Flaring": 104.0,
    "Gas Fuel": 650.0,
    "Liquid Fuel": 2398.0,
    "Per Capita": 1.19,
    "Solid Fuel": 1765.0,
    "Total": 5026.0,
    "Year": 1977
  },
  {
    "Cement": 116.0,
    "Gas Flaring": 106.0,
    "Gas Fuel": 680.0,
    "Liquid Fuel": 2392.0,
    "Per Capita": 1.19,
    "Solid Fuel": 1793.0,
    "Total": 5087.0,
    "Year": 1978
  },
  {
    "Cement": 119.0,
    "Gas Flaring": 98.0,
    "Gas Fuel": 721.0,
    "Liquid Fuel": 2544.0,
    "Per Capita": 1.23,
    "Solid Fuel": 1887.0,
    "Total": 5369.0,
    "Year": 1979
  },
  {
    "Cement": 120.0,
    "Gas Flaring": 86.0,
    "Gas Fuel": 740.0,
    "Liquid Fuel": 2422.0,
    "Per Capita": 1.2,
    "Solid Fuel": 1947.0,
    "Total": 5315.0,
    "Year": 1980
  },
  {
    "Cement": 121.0,
    "Gas Flaring": 64.0,
    "Gas Fuel": 756.0,
    "Liquid Fuel": 2289.0,
    "Per Capita": 1.14,
    "Solid Fuel": 1921.0,
    "Total": 5152.0,
    "Year": 1981
  },
  {
    "Cement": 121.0,
    "Gas Flaring": 64.0,
    "Gas Fuel": 740.0,
    "Liquid Fuel": 2196.0,
    "Per Capita": 1.11,
    "Solid Fuel": 1992.0,
    "Total": 5113.0,
    "Year": 1982
  },
  {
    "Cement": 125.0,
    "Gas Flaring": 58.0,
    "Gas Fuel": 741.0,
    "Liquid Fuel": 2176.0,
    "Per Capita": 1.09,
    "Solid Fuel": 1995.0,
    "Total": 5094.0,
    "Year": 1983
  },
  {
    "Cement": 128.0,
    "Gas Flaring": 51.0,
    "Gas Fuel": 808.0,
    "Liquid Fuel": 2199.0,
    "Per Capita": 1.11,
    "Solid Fuel": 2094.0,
    "Total": 5280.0,
    "Year": 1984
  },
  {
    "Cement": 131.0,
    "Gas Flaring": 49.0,
    "Gas Fuel": 837.0,
    "Liquid Fuel": 2186.0,
    "Per Capita": 1.12,
    "Solid Fuel": 2237.0,
    "Total": 5439.0,
    "Year": 1985
  },
  {
    "Cement": 137.0,
    "Gas Flaring": 46.0,
    "Gas Fuel": 831.0,
    "Liquid Fuel": 2293.0,
    "Per Capita": 1.14,
    "Solid Fuel": 2300.0,
    "Total": 5607.0,
    "Year": 1986
  },
  {
    "Cement": 143.0,
    "Gas Flaring": 44.0,
    "Gas Fuel": 894.0,
    "Liquid Fuel": 2306.0,
    "Per Capita": 1.15,
    "Solid Fuel": 2364.0,
    "Total": 5752.0,
    "Year": 1987
  },
  {
    "Cement": 152.0,
    "Gas Flaring": 50.0,
    "Gas Fuel": 937.0,
    "Liquid Fuel": 2412.0,
    "Per Capita": 1.17,
    "Solid Fuel": 2414.0,
    "Total": 5965.0,
    "Year": 1988
  },
  {
    "Cement": 156.0,
    "Gas Flaring": 41.0,
    "Gas Fuel": 985.0,
    "Liquid Fuel": 2459.0,
    "Per Capita": 1.17,
    "Solid Fuel": 2457.0,
    "Total": 6097.0,
    "Year": 1989
  },
  {
    "Cement": 157.0,
    "Gas Flaring": 40.0,
    "Gas Fuel": 1019.0,
    "Liquid Fuel": 2492.0,
    "Per Capita": 1.16,
    "Solid Fuel": 2419.0,
    "Total": 6127.0,
    "Year": 1990
  },
  {
    "Cement": 161.0,
    "Gas Flaring": 44.0,
    "Gas Fuel": 1063.0,
    "Liquid Fuel": 2605.0,
    "Per Capita": 1.16,
    "Solid Fuel": 2345.0,
    "Total": 6217.0,
    "Year": 1991
  },
  {
    "Cement": 167.0,
    "Gas Flaring": 35.0,
    "Gas Fuel": 1095.0,
    "Liquid Fuel": 2510.0,
    "Per Capita": 1.13,
    "Solid Fuel": 2357.0,
    "Total": 6164.0,
    "Year": 1992
  },
  {
    "Cement": 176.0,
    "Gas Flaring": 36.0,
    "Gas Fuel": 1129.0,
    "Liquid Fuel": 2523.0,
    "Per Capita": 1.11,
    "Solid Fuel": 2298.0,
    "Total": 6162.0,
    "Year": 1993
  },
  {
    "Cement": 186.0,
    "Gas Flaring": 38.0,
    "Gas Fuel": 1139.0,
    "Liquid Fuel": 2546.0,
    "Per Capita": 1.11,
    "Solid Fuel": 2358.0,
    "Total": 6266.0,
    "Year": 1994
  },
  {
    "Cement": 197.0,
    "Gas Flaring": 36.0,
    "Gas Fuel": 1157.0,
    "Liquid Fuel": 2565.0,
    "Per Capita": 1.12,
    "Solid Fuel": 2442.0,
    "Total": 6398.0,
    "Year": 1995
  },
  {
    "Cement": 203.0,
    "Gas Flaring": 37.0,
    "Gas Fuel": 1209.0,
    "Liquid Fuel": 2624.0,
    "Per Capita": 1.13,
    "Solid Fuel": 2469.0,
    "Total": 6542.0,
    "Year": 1996
  },
  {
    "Cement": 209.0,
    "Gas Flaring": 38.0,
    "Gas Fuel": 1208.0,
    "Liquid Fuel": 2700.0,
    "Per Capita": 1.13,
    "Solid Fuel": 2495.0,
    "Total": 6651.0,
    "Year": 1997
  },
  {
    "Cement": 209.0,
    "Gas Flaring": 35.0,
    "Gas Fuel": 1243.0,
    "Liquid Fuel": 2766.0,
    "Per Capita": 1.12,
    "Solid Fuel": 2391.0,
    "Total": 6643.0,
    "Year": 1998
  },
  {
    "Cement": 217.0,
    "Gas Flaring": 33.0,
    "Gas Fuel": 1270.0,
    "Liquid Fuel": 2737.0,
    "Per Capita": 1.1,
    "Solid Fuel": 2352.0,
    "Total": 6610.0,
    "Year": 1999
  },
  {
    "Cement": 226.0,
    "Gas Flaring": 45.0,
    "Gas Fuel": 1288.0,
    "Liquid Fuel": 2838.0,
    "Per Capita": 1.11,
    "Solid Fuel": 2367.0,
    "Total": 6765.0,
    "Year": 2000
  },
  {
    "Cement": 237.0,
    "Gas Flaring": 46.0,
    "Gas Fuel": 1312.0,
    "Liquid Fuel": 2840.0,
    "Per Capita": 1.12,
    "Solid Fuel": 2492.0,
    "Total": 6927.0,
    "Year": 2001
  },
  {
    "Cement": 252.0,
    "Gas Flaring": 48.0,
    "Gas Fuel": 1344.0,
    "Liquid Fuel": 2831.0,
    "Per Capita": 1.12,
    "Solid Fuel": 2521.0,
    "Total": 6996.0,
    "Year": 2002
  },
  {
    "Cement": 276.0,
    "Gas Flaring": 48.0,
    "Gas Fuel": 1391.0,
    "Liquid Fuel": 2959.0,
    "Per Capita": 1.17,
    "Solid Fuel": 2743.0,
    "Total": 7416.0,
    "Year": 2003
  },
  {
    "Cement": 298.0,
    "Gas Flaring": 53.0,
    "Gas Fuel": 1437.0,
    "Liquid Fuel": 3053.0,
    "Per Capita": 1.21,
    "Solid Fuel": 2967.0,
    "Total": 7807.0,
    "Year": 2004
  },
  {
    "Cement": 320.0,
    "Gas Flaring": 60.0,
    "Gas Fuel": 1480.0,
    "Liquid Fuel": 3076.0,
    "Per Capita": 1.24,
    "Solid Fuel": 3157.0,
    "Total": 8093.0,
    "Year": 2005
  },
  {
    "Cement": 356.0,
    "Gas Flaring": 61.0,
    "Gas Fuel": 1525.0,
    "Liquid Fuel": 3089.0,
    "Per Capita": 1.27,
    "Solid Fuel": 3339.0,
    "Total": 8370.0,
    "Year": 2006
  },
  {
    "Cement": 382.0,
    "Gas Flaring": 68.0,
    "Gas Fuel": 1572.0,
    "Liquid Fuel": 3081.0,
    "Per Capita": 1.28,
    "Solid Fuel": 3464.0,
    "Total": 8566.0,
    "Year": 2007
  },
  {
    "Cement": 388.0,
    "Gas Flaring": 71.0,
    "Gas Fuel": 1631.0,
    "Liquid Fuel": 3122.0,
    "Per Capita": 1.3,
    "Solid Fuel": 3571.0,
    "Total": 8783.0,
    "Year": 2008
  },
  {
    "Cement": 413.0,
    "Gas Flaring": 66.0,
    "Gas Fuel": 1585.0,
    "Liquid Fuel": 3056.0,
    "Per Capita": 1.28,
    "Solid Fuel": 3620.0,
    "Total": 8740.0,
    "Year": 2009
  },
  {
    "Cement": 450.0,
    "Gas Flaring": 59.0,
    "Gas Fuel": 1702.0,
    "Liquid Fuel": 3114.0,
    "Per Capita": 1.33,
    "Solid Fuel": 3842.0,
    "Total": 9167.0,
    "Year": 2010
  }
];

const Co2 = ({ data }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
   
    <div className="container">
         {data
           .filter((arrayID) => arrayID.id === "2")
           .map((arrayData) => (
             <div key={arrayData.title}>
               <h1 style={{ color: arrayData.textcolor }} className="bigHeading">
                 {arrayData.title}{" "}
               </h1>
               <p style={{ color: arrayData.textcolor }}>{arrayData.subtitle}</p>
    
               <div className="popupGrid">
                 <div className="topLeftGrid">
                 <LineChart
                      width={490}
                      height={400}
                      data={co2data}
                      margin={{
                        top: 5,
                        bottom: 5,
                        left: -15,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="Year" />
                      <YAxis />
                      <Tooltip style={{wrapperStyle: "black"}}  />
                      <Legend/>
    
                      <Line
                        type="monotone"
                        dataKey=""
                        stroke={arrayData.textcolor}
                      />
                    </LineChart>
                    <FormControl fullWidth>
                    <InputLabel style={{color: arrayData.textcolor }} id="demo-simple-select-label">   Välj   </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                          style={{ backgroundColor: "#f5f5f5" }}
                        >
                          <MenuItem style={{color: "black"}} value="Cement" >Cement</MenuItem>
                          <MenuItem style={{color: "black"}} value="Gas Flaring" >Gas Flaring</MenuItem>
                          <MenuItem style={{color: "black"}} value="Gas Fuel">Gas Fuel</MenuItem>
                          <MenuItem style={{color: "black"}} value="Liquid Fuel">Liquid Fuel</MenuItem>
                          <MenuItem style={{color: "black"}} value="Solid Fuel">Solid Fuel</MenuItem>
                          <MenuItem style={{color: "black"}} value="Per Capital">Per Capital</MenuItem>
                          <MenuItem style={{color: "black"}} value="Total">Total</MenuItem>
                        </Select>
                  </FormControl>


                   <p>
                     Data: GISS Surface Temperature (GISTEMP) analys och den
                     globala komponenten av Climate at a Glance (GCAG).
                   </p>
                 </div>
                 <div className="topRightGrid">
                   <p className="smallHeading">
                     <b style={{ color: arrayData.textcolor }}>
                       {arrayData.graphtitle}
                     </b>
                   </p>
                   <p>{arrayData.graphtext}</p>
                 </div>
                 <div className="bottomLeftGrid">
                   <p className="smallHeading">
                     <b style={{ color: arrayData.textcolor }}>
                       {arrayData.videotitle}
                     </b>
                   </p>
                   <p>{arrayData.videotext}</p>
                 </div>
                 <div className="bottomRightGrid">
                   <div className="vidcontainer">
                     <div >
                       <ReactPlayer
                         url= "https://youtu.be/AyszFPGbu2s"
                  
                         playing={true}
                         // controls={true}
                         loop={true}
                         muted={true}
                          playsinline={true}
                         onReady={onLoadedData}
                         width="100%"
                       />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           ))}
       </div>
      
  );
};

export default Co2 ;

