'use client';

import {
  Description,
  Upload,
  Delete,
  Download,
  Add,
  Close,
  CloudUpload,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  IconButton,
  Chip,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useState } from 'react';

interface FileItem {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  summary?: string;
}

export default function Home() {
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'sample-document.pdf',
      size: '2.3 MB',
      uploadedAt: '2024-01-15',
      status: 'completed',
      summary:
        'This document discusses the implementation of machine learning algorithms in modern software development. It covers various approaches including supervised learning, unsupervised learning, and reinforcement learning. The document provides practical examples and best practices for integrating ML into existing systems.',
    },
    {
      id: '2',
      name: 'research-paper.docx',
      size: '1.8 MB',
      uploadedAt: '2024-01-14',
      status: 'completed',
      summary:
        'A comprehensive analysis of renewable energy sources and their impact on global sustainability. The research examines solar, wind, and hydroelectric power generation methods, comparing their efficiency, cost-effectiveness, and environmental benefits.',
    },
  ]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(files[0]);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  const handleFileSelect = (file: FileItem) => {
    setSelectedFile(file);
  };

  const handleDeleteFile = (fileId: string) => {
    setFiles(files.filter(f => f.id !== fileId));
    if (selectedFile?.id === fileId) {
      setSelectedFile(
        files.length > 1 ? files.find(f => f.id !== fileId) || null : null
      );
    }
  };

  const getStatusColor = (status: FileItem['status']) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'warning';
      case 'uploading':
        return 'info';
      case 'error':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusText = (status: FileItem['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'processing':
        return 'Processing';
      case 'uploading':
        return 'Uploading';
      case 'error':
        return 'Error';
      default:
        return 'Unknown';
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Description sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Document Summarizer
          </Typography>
          <Button
            color="inherit"
            startIcon={<Upload />}
            onClick={() => setUploadDialogOpen(true)}
          >
            Upload Document
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        {/* File List Sidebar */}
        <Paper
          sx={{
            width: 320,
            overflow: 'auto',
            borderRight: 1,
            borderColor: 'divider',
          }}
        >
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="h6" gutterBottom>
              Documents ({files.length})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload documents to get AI-powered summaries
            </Typography>
          </Box>

          <List sx={{ p: 0 }}>
            {files.map((file, index) => (
              <Box key={file.id}>
                <ListItem
                  button
                  selected={selectedFile?.id === file.id}
                  onClick={() => handleFileSelect(file)}
                  sx={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    py: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      mb: 1,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Description color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={file.name}
                      secondary={`${file.size} • ${file.uploadedAt}`}
                      sx={{ flexGrow: 1 }}
                    />
                    <IconButton
                      size="small"
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        handleDeleteFile(file.id);
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                  <Chip
                    label={getStatusText(file.status)}
                    color={
                      getStatusColor(file.status) as
                        | 'success'
                        | 'warning'
                        | 'info'
                        | 'error'
                        | 'default'
                    }
                    size="small"
                    sx={{ alignSelf: 'flex-start' }}
                  />
                </ListItem>
                {index < files.length - 1 && <Divider />}
              </Box>
            ))}
          </List>
        </Paper>

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {selectedFile ? (
            <>
              {/* File Header */}
              <Paper sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="h6">{selectedFile.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedFile.size} • Uploaded {selectedFile.uploadedAt}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      startIcon={<Download />}
                      variant="outlined"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      Download
                    </Button>
                    <Chip
                      label={getStatusText(selectedFile.status)}
                      color={
                        getStatusColor(selectedFile.status) as
                          | 'success'
                          | 'warning'
                          | 'info'
                          | 'error'
                          | 'default'
                      }
                    />
                  </Box>
                </Box>
              </Paper>

              {/* Summary Content */}
              <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
                <Typography variant="h5" gutterBottom>
                  AI Summary
                </Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {selectedFile.summary ||
                        'No summary available yet. The document is being processed...'}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </>
          ) : (
            /* Empty State */
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3,
              }}
            >
              <CloudUpload
                sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                No Document Selected
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 3 }}
              >
                Select a document from the list to view its AI-generated
                summary, or upload a new document to get started.
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => setUploadDialogOpen(true)}
              >
                Upload Document
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Upload Dialog */}
      <Dialog
        open={uploadDialogOpen}
        onClose={() => setUploadDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Upload Document
          <IconButton
            aria-label="close"
            onClick={() => setUploadDialogOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <CloudUpload
              sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              Drop your document here
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Supported formats: PDF, DOCX, TXT, RTF
            </Typography>
            <Button variant="outlined" component="label" startIcon={<Upload />}>
              Choose File
              <input
                type="file"
                hidden
                accept=".pdf,.docx,.txt,.rtf"
                multiple
              />
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUploadDialogOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => setUploadDialogOpen(false)}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="upload"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setUploadDialogOpen(true)}
      >
        <Add />
      </Fab>
    </Box>
  );
}
