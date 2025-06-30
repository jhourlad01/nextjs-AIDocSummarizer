'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8f9fb',
      paper: '#fff',
    },
    primary: {
      main: '#007aff', // iOS blue
    },
    secondary: {
      main: '#34c759', // iOS green
    },
    text: {
      primary: '#222',
      secondary: '#666',
    },
    divider: '#e5e5ea',
  },
  shape: {
    borderRadius: 4, // 4px
  },
  shadows: [
    'none',
    '0px 1px 4px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
    '0px 1.5px 8px rgba(60,60,67,0.08)',
  ],
  typography: {
    fontFamily: [
      'SF Pro Display',
      'Inter',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#f8f9fb',
          color: '#222',
          boxShadow: 'none',
          borderBottom: '1px solid #e5e5ea',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
